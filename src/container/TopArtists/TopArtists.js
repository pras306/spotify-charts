import React from 'react';

import './TopArtists.css';
import { Loader, Error, RankList } from '../../components';
import { useGetTopArtistsQuery } from '../../redux/services/spotify';

const TopArtists = () => {
    const { data: artists, isFetching, error } = useGetTopArtistsQuery();

    const renderArtists = () => {
        if(isFetching) return <Loader title={'Loading Top Artists...'} />
        else if(error) return <Error />
        else {
            if(artists) {
                return(
                    <RankList type={'artists'} data={artists} />
                );
            } else {
                return <>No Artists details could be fetched at this time. Please check later</>
            }
        }
    }

    return (
        <div className='mp__topArtists'>
            {renderArtists()}
        </div>
    );
};

export default TopArtists;