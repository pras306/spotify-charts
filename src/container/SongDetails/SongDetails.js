import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUser, FaUsers } from 'react-icons/fa';
import { MdOutlineTimer } from 'react-icons/md';

import './SongDetails.css';
import { Loader, Error } from '../../components/index';
import { useGetTracksQuery, useGetTrackLyricsQuery } from '../../redux/services/spotify';
import { MONTHS } from '../../assets/constants';
import { getArtists } from '../../utils/utils';

const SongDetails = () => {
    const { songId } = useParams();
    const { data, isFetching, error } = useGetTracksQuery(songId);
    const { data: lyricsData, isFetching: lyricsFetching, error: lyricsError } = useGetTrackLyricsQuery(songId);

    const getDuration = (time) => {
        let min = parseInt(time / 1000 / 60);
        let sec = Math.round(time / 1000 % 60);

        return min + ' min ' + sec + ' sec';
    };

    const getReleaseDate = (date) => {
        let [ year, month, day] = date.split('-');

        return MONTHS[parseInt(month)] + ' ' + day + ', ' + year;
    };

    const renderSongDetails = () => {
        if(isFetching) return <Loader title={'Loading Song Details'} />
        else if(error) return <Error />
        else {
            return (
                <div className="mp__songDetails-title">
                    <img src={data?.tracks[0].album.images[0].url} alt={data?.name} />
                    <div className="mp__songDetails-header">
                        <h4>{data?.tracks[0].name}</h4>
                        <div className="mp__songDetails-subheader">
                            {data?.tracks[0].artists.length > 1 ?
                                <>
                                    <FaUsers />
                                </>
                            :
                                <>
                                    <FaUser />
                                </>
                            }
                            <span>
                                {getArtists(data?.tracks[0].artists)}
                            </span>
                        </div>
                        <div className="mp__songDetails-content">
                            <span>Album: {data?.tracks[0].album.name}</span>
                            <span>Release Date: {getReleaseDate(data?.tracks[0].album.release_date)}</span>
                            <span>
                                <MdOutlineTimer />
                                {getDuration(data?.tracks[0].duration_ms)}
                            </span>
                            <span>Number of Tracks in Album: {data?.tracks[0].album.total_tracks}</span>
                            <span>Available in {data?.tracks[0].available_markets.length} countries</span>
                        </div>
                    </div>
                </div>
            )
        }
    };

    const renderTrackLyrics = () => {
        if(lyricsFetching) return <Loader title={'Loading Song Lyrics'} />
        else if(lyricsError) return <Error />
        else {
            return (
                <div className="mp__songDetails-lyrics">
                    <h2>Song Lyrics</h2>
                    {lyricsData?.lyrics ?
                        <p>
                            {lyricsData?.lyrics.lines.map((line,idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <span>{line.words}</span>
                                        <br />
                                    </React.Fragment>
                                )
                            })}
                        </p>
                    :
                        <p>Sorry, No lyrics data was not available for this song</p>
                    }
                </div>
            )
        }
    };

    return (
        <div className='mp__songDetails'>
            {renderSongDetails()}
            {renderTrackLyrics()}
        </div>
    );
};

export default SongDetails;