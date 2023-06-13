import React from 'react';

import './Discover.css';
import { useGetTopChartsQuery } from '../../redux/services/spotify';
import { Loader, Error, SongCard } from '../../components';

const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();

    const renderContainer = () => {
        if(isFetching) return <Loader title={'Loading songs...'}/>;
        else if(error) return <Error />;
        else {
            return (
                <>
                    <h2>Discover Global Spotify Charts</h2>
                    <div className="mp__discover-songs">
                        {data?.map((song, idx) => {
                            return <SongCard 
                                        key={idx} 
                                        song={song}
                                    />;
                            })
                        }
                    </div>
                </>
            );
        }
    };
    

    return (
        <div className='mp__discover'>
            {renderContainer()}
        </div>
    );
};

export default Discover;