import React from 'react';
import { useParams } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import './ArtistDetails.css';
import { useGetArtistOverviewQuery } from '../../redux/services/spotify';
import { Loader, Error } from '../../components/index';
import { addCommaSeparator } from '../../utils/utils';

const ArtistDetails = () => {
    const { artistId } = useParams();
    const { data: artist, isFetching, error } = useGetArtistOverviewQuery(artistId);

    const renderArtist = () => {
        if(isFetching) return <Loader title={'Loading Artist Overview...'} />
        else if(error) return <Error />
        else {
            if(artist) {
                return (
                    <div className='mp__artist-image'>
                        <img src={artist?.data.artist.visuals.headerImage.sources[0].url} alt='Artist' />
                        <div className="mp__artist-header">
                            <h1>{artist?.data.artist.profile.name}</h1>
                            <span>{artist?.data.artist.profile.verified ? <MdVerified /> : ''}</span>
                        </div>
                        <div className="mp__artist-links">
                            {artist?.data.artist.profile.externalLinks.items.map((link,idx) => {
                                if(link.name.toLowerCase() === 'facebook') {
                                    return (
                                        <React.Fragment key={idx}>
                                            <a href={link.url} target='_blank' rel='noreferrer'>
                                                <FaFacebook />
                                            </a>
                                        </React.Fragment>
                                    )
                                } else if(link.name.toLowerCase() === 'instagram') {
                                    return (
                                        <React.Fragment key={idx}>
                                            <a href={link.url} target='_blank' rel='noreferrer'>
                                                <FaInstagram />
                                            </a>
                                        </React.Fragment>
                                    )
                                } else if(link.name.toLowerCase() === 'twitter') {
                                    return (
                                        <React.Fragment key={idx}>
                                            <a href={link.url} target='_blank' rel='noreferrer'>
                                                <FaTwitter />
                                            </a>
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <React.Fragment key={idx}>
                                            <a href={link.url} target='_blank' rel='noreferrer'>
                                                {link.name}
                                            </a>
                                        </React.Fragment>
                                    )
                                }
                            })}
                        </div>
                        <div className="mp__artist-stats">
                            <span>{`Followers: ${addCommaSeparator('' + artist?.data.artist.stats.followers)}`}</span>
                            <span>{`Monthly Listeners: ${addCommaSeparator('' + artist?.data.artist.stats.monthlyListeners)}`}</span>
                            <span>{`World Rank: ${artist?.data.artist.stats.worldRank}`}</span>
                            <span>{`Singles: ${artist?.data.artist.discography.singles.totalCount}`}</span>
                            <span>{`Albums: ${artist?.data.artist.discography.albums.totalCount}`}</span>
                            <span>{`Popular Releases: ${artist?.data.artist.discography.popularReleases.totalCount}`}</span>
                        </div>
                        <div className="mp__artist-bio">
                            <p>{artist?.data.artist.profile.biography.text}</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <p>No Artist record exists</p>
                );
            }
        }
    }

    return (
        <div className='mp__artist'>
            {renderArtist()}
        </div>
    );
};

export default ArtistDetails;