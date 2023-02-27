import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {
    const {allAuthors, setAllAuthors} =props;
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [author, setAuthor] = useState({
        "name": ""
    })

    const inputChange = (e) => {
        setAuthor(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newAuthor', author)
        .then((res) => {
            console.log(res);
            setAllAuthors([...allAuthors, res.data])
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
                <p>Add a new author:</p>
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
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm;