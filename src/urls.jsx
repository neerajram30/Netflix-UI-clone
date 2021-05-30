import {API_KEY} from './constants'
export const orginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `/discover/movie?api_key=${API_KEY}&with_geners=28`;
export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const toprated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_geners=35`
export const horror = `/discover/movie?api_key=${API_KEY}&with_geners=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_geners=10749`;
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_geners=99`;