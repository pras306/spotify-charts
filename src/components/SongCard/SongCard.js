import React from 'react';
import { FaForward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './SongCard.css';
import { getArtists } from '../../utils/utils';

const SongCard = ({ song }) => {

    const renderCard = () => {
        if(song) {
            return (
                <>
                    <div className="mp__songcard-player">
                        <img src={song?.trackMetadata.displayImageUri} alt={song?.trackMetadata.trackName} />
                        <FaForward />
                    </div>
                    <Link to={`/songs/${song?.trackMetadata.trackUri.split(':')[2]}`}>{song?.trackMetadata.trackName}</Link>
                    <span>Artists: {getArtists(song?.trackMetadata.artists)}</span>
                </>
            )
        }
    };

    return (
        <div className='mp__songcard'>
            {renderCard()}
        </div>
    );
};

export default SongCard;