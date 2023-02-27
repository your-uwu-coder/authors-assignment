import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Edit = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [author, setAuthor] = useState({
        "name": ""
    })

    const inputChange = (e) => {
        setAuthor(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    //grabbing one entry from current data to update
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((author) => {
            //set state to data key from db
            setAuthor(author.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    // update author 
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id}`, author)
        .then((res) => {
            console.log(res);
            //no need to setAuthors because we are updating a current entry
            navigate('/')
        })
        .catch((err) => {
            setErrors(err.response.data.errors)
            // console.log(err)
        })
    }

    const clickHandler = () => {
        navigate('/')
    }

    return (
        <div>
            <div className='text-start ms-5'>
                <Link to='/'>Home</Link>
                <p>Edit this author:</p>
            </div>
            <div className='card w-50 ms-5 text-start p-4'>
                <form onSubmit={submitHandler} className='d-flex flex-column mb-3'>
                    <label>Name:</label>
                    <input type="text" className='w-50' onChange={inputChange} name='name' value={author.name} />
                    {
                        errors.name? 
                        <p className='text-danger'>{errors.name.message}</p>:
                        null
                    }

                    <div className='mt-2'>
                        <button type="button" onClick={clickHandler} className='btn btn-primary me-3'>Cancel</button>
                        <button type="submit" className='btn btn-primary'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit;