import { react, useEffect } from 'react'
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux"
import { fetchFilm } from '../redux/Slicing';

export default function Movie(params) {
    const listFilm = useSelector(state => state.films.entities)
    const loadingApi = useSelector(state => state.films.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilm('man'))

    }, [])

    return (
        <div>
            <div className="m-10">
                <div className=" mb-10">
                    <h1 className="text-4xl pl-5">Here your favourite movies</h1>
                </div>
                <div className="flex">
                    <div className="grid grid-cols-4 gap-x-3 gap-y-40">
                        {
                            loadingApi ? <p>Loading</p> :
                            listFilm.map((val, idx) => {
                                return (
                                    <MovieCard key={idx} uri={val.Poster} film_name={val.Title}></MovieCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}
