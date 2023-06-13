import React from 'react';

import './TopCharts.css';
import { Loader, Error, RankList } from '../../components';
import { useGetTopTracksQuery } from '../../redux/services/spotify';

const TopCharts = () => {
    const { data: tracks, isFetching, error } = useGetTopTracksQuery();

    const renderTracks = () => {
        if(isFetching) return <Loader title={'Loading Top Tracks...'} />
        else if(error) return <Error />
        else {
            if(tracks) {
                return (
                    <>
                        <RankList 
                            type={'tracks'}
                            data={tracks}
                        />
                        {/* <div className="mp__topCharts-header">
                            <h2>{tracks?.title}</h2>
                            <p>{tracks?.description}</p>
                        </div>
                        <div className='mp__topCharts-items'>
                            {tracks?.tracks.map((track, idx) => {
                                return(
                                    <div className='mp__topCharts-item' key={idx}>
                                        <span>{track.chartData.currentRank}</span>
                                        <img src={track.album.cover[0].url} alt='Album Cover' />
                                        <Link to={`/songs/${track.id}`}>{track.name}</Link>
                                        <span>
                                            <a href={track.shareUrl} target='_blank' rel='noreferrer'>
                                                <FaSpotify />
                                            </a>
                                        </span>
                                    </div>
                                )
                            })}
                        </div> */}
                    </>
                )
            } else {
                return <>No Tracks details could be fetched at this time. Please check later</>
            }
        }
    }

    return (
        <div className='mp__topCharts'>
            {renderTracks()}
        </div>
    );
};

export default TopCharts;