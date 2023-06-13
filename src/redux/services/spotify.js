import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SPOTIFY_BASE_URL, DAYSINMONTH } from '../../assets/constants';

const getLastThursday = () => {
    let currDate = new Date();

    let date = currDate.getDate();
    let month = currDate.getMonth();
    let year = currDate.getFullYear();

    // if(currDate.getDay() <= 4) {
        
    // } else {
    //     date -= (currDate.getDay() - 4);
    // }
    let checkVal = 7 - 4 + currDate.getDay();
    if(checkVal > date) {
        month -= 1;
        checkVal -= date;
        let days = DAYSINMONTH[month];
        date = days - checkVal;
    } else {
        date -= (7 - 4 + currDate.getDay());
    }

    month = month > 9 ? month + 1 : '0' + (month + 1);
    date = date > 9 ? date : '0' + date;

    return '' + year + '-' + month + '-' + date;
};

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: SPOTIFY_BASE_URL,
    }),
    endpoints: builder => ({
        getTopCharts: builder.query({
            query: () => `/top_200_tracks/${getLastThursday()}`
        }),
        getArtistsByMonthlyListeners: builder.query({
            query: () => '/top_20_by_monthly_listeners'
        }),
        getArtistsByFollowers: builder.query({
            query: () => '/top_20_by_followers'
        }),
        getTracks: builder.query({
            query: (songId) => `/tracks/${songId}`
        }),
        getTrackLyrics: builder.query({
            query: (songId) => `/track_lyrics/${songId}`
        }),
        getArtistOverview: builder.query({
            query: (artistId) => `/artist_overview/${artistId}`
        }),
        getTopTracks: builder.query({
            query: () => '/chart/tracks/top'
        }),
        getTopArtists: builder.query({
            query: () => '/chart/artists/top'
        })
    })
});

export const {
    useGetTopChartsQuery,
    useGetArtistsByMonthlyListenersQuery,
    useGetArtistsByFollowersQuery,
    useGetTracksQuery,
    useGetTrackLyricsQuery,
    useGetArtistOverviewQuery,
    useGetTopTracksQuery,
    useGetTopArtistsQuery
} = spotifyApi;