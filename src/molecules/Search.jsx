import { react, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchFilm } from '../redux/Slicing';
export default function Search() {

    const [searchVal, setSearchVal] = useState('');
    const dispatch = useDispatch()

    function handleChange(e) {
        console.log("ini val search: ", e.target.value)
        setSearchVal(e.target.value)
        
    }

    function handleSearch(){
        console.log("search val: ", searchVal )
        dispatch(fetchFilm(searchVal))
    }

    return (
        <div className='w-full mx-20 my-6'>
            <input className='inline-flex rounded p-1.5' type='text' placeholder=' Search your movies here ' onChange={handleChange} />
            
            <div className=' w-10/11 inline-flex'>
                <button className=' bg-neutral-600 w-full text-slate-100 
                 hover:bg-red-600 rounded p-0.5' onClick={handleSearch}> Search </button>
            </div>
        </div>
    )
}
