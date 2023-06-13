import { Link } from 'react-router-dom';

export const getArtists = (songArtists) => {
    if(songArtists.length === 0) return;

    let lastIdx = songArtists.length;

    return songArtists.map((artist, idx) => {
        let artistId = artist.id ? artist.id : artist.spotifyUri.split(':')[2];
        if(idx < lastIdx - 1) {
            return (
                <Link key={idx} to={`/artists/${artistId}`}>
                    {`${artist.name}, `} 
                </Link>
            )
        } else {
            return (
                <Link key={idx} to={`/artists/${artistId}`}>
                    {artist.name}
                </Link>
            )
        }
    });
};

export const addCommaSeparator = (num) => {
    if(num.length < 3) return num;
    let retVal = '';
    let checkAppender = num.length % 3;

    for(let i = 0; i < num.length; i++) {
        retVal += num[i];
        checkAppender -= 1;
        if(checkAppender < 0) {
            checkAppender = 2;
            continue;
        }

        if(checkAppender === 0) {
            retVal += ','
            checkAppender = 3;
        }
    }

    retVal = retVal.slice(0, retVal.length - 1);

    return retVal;
};