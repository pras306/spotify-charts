import { configureStore } from '@reduxjs/toolkit';

import { spotifyApi } from './services/spotify';

export const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
});