import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa';

import './RankList.css';

const RankList = ({ type, data }) => {

    return (
        <div className='mp__rankList'>
            <div className="mp__rankList-header">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
            </div>
            <div className='mp__rankList-items'>
                {type === 'tracks' ?
                    data?.tracks.map((track, idx) => {
                        return(
                            <div className='mp__rankList-item' key={idx}>
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
                    })
                :
                data?.artists.map((artist, idx) => {
                    return(
                        <div className='mp__rankList-item' key={idx}>
                            <span>{artist.chartData.currentRank}</span>
                            <img src={artist.visuals.avatar[0].url} alt='Album Cover' />
                            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                            <span>
                                <a href={artist.shareUrl} target='_blank' rel='noreferrer'>
                                    <FaSpotify />
                                </a>
                            </span>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default RankList;