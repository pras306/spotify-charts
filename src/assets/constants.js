import { HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup, HiOutlineHashtag } from 'react-icons/hi';


export const SPOTIFY_BASE_URL = process.env.NODE_ENV === 'production' ? "https://api-proxy-server.up.railway.app/api/v1/spotify" : "http://localhost:5000/api/v1/spotify";

export const MONTHS = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

export const DAYSINMONTH = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
};

export const LINKS = [
    { name: 'Global', to: '/', icon: HiOutlineHome },
    { name: 'Artists Charts', to: '/artists-charts', icon: HiOutlinePhotograph },
    { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
    { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag }
];