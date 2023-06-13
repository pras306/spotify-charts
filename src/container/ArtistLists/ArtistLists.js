import React from 'react';

import './ArtistLists.css';
import { Loader, Error } from '../../components/index';
import { useGetArtistsByMonthlyListenersQuery, useGetArtistsByFollowersQuery } from '../../redux/services/spotify';
import { addCommaSeparator } from '../../utils/utils';

const ArtistLists = () => {

    const { data: listeners, isFetching: listenersFetching, error: listenersError  } = useGetArtistsByMonthlyListenersQuery();
    const { data: followers, isFetching: followersFetching, error: followersError  } = useGetArtistsByFollowersQuery();

    const renderList = () => {
        if(listenersFetching || followersFetching) return <Loader />
        else if(listenersError || followersError) return <Error />
        else {
            return (
                <div className='mp__artistLists-splitter'>
                    <div className="mp__artistLists-content">
                        <h3>Top Artists by Monthly Listeners</h3>
                        <table>
                            <thead>
                                <tr>
                                    {Object.keys(listeners[0])?.map((head, i) => {
                                        return <th key={i}>{head}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {listeners?.map((item, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{item.rank}</td>
                                            <td>{item.artist}</td>
                                            <td>{`${item.monthlyListeners} million`}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="mp__artistLists-content">
                        <h3>Top Artists by Followers</h3>
                        <table>
                            <thead>
                                <tr>
                                    {Object.keys(followers[0])?.map((head, i) => {
                                        return <th key={i}>{head}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {followers?.map((item, idx) => {
                                    if(item.followers === null) return null;
                                    return (
                                        <tr key={idx}>
                                            <td>{item.rank}</td>
                                            <td>{item.artist}</td>
                                            <td>{addCommaSeparator( '' + item.followers)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='mp__artistLists'>
            {renderList()}
        </div>
    );
};

export default ArtistLists;