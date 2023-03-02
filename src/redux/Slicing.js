import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import fetchMovies from './Api.js';
import axios from 'axios';

const initialState = {
    entities: [],
    loading: false
}

/*const API_KEY = "4443f697";
const BASE_URL = "http://www.omdbapi.com/";

axios.get(`${BASE_URL}?s=man&page=2&apikey=${API_KEY}`).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});*/ 

export const fetchFilm = createAsyncThunk("films/initial",async (param) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${param}&page=2&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
return response.data
})

const Slicing = createSlice({
    name: "films",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFilm.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            // console.log("state: ", state)
            // console.log("action: ", action.payload.Search)
            // state.entities
            state.entities = action.payload.Search
            state.loading = false
        })
    }
})

export default Slicing.reducer

/*const searchTerm = 'man';
const page = 2;

fetchMovies(searchTerm, page)
  .then(data => console.log(data))
  .catch(error => console.error(error));*/
