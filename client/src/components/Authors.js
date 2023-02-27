import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


const Authors = (props) => {
    const {allAuthors, setAllAuthors} = props;
    const navigate = useNavigate()
    const {id} = useParams()

    //display all authors
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
        .then((allAuthors) => {
            setAllAuthors(allAuthors.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    //delete an author from client and server
    const deleteHandler = (id) => {
        console.log("deleted", id)
        axios.delete(`http://localhost:8000/api/deleteOne/${id}`)
            // console.log(`${id}`)
            .then((res) => {
                navigate('/')
                // console.log(id)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className='w-50 ms-5 text-start'>
            <Link to='/addAuthor'>Add an author</Link>
            <p>We have quotes by:</p>

            <table className='table table-bordered border-dark'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                        <tbody >
                {
                    allAuthors.map((author, idx) => (
                            <tr key={idx}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}>
                                        <button type="button" className='btn btn-secondary btn-sm me-3'>Edit</button>
                                    </Link>
                                    <button onClick={(e) => deleteHandler(author._id)} className='btn btn-secondary btn-sm'>Delete</button></td>
                            </tr>
                    ))
                }
                        </tbody>

            </table>

        </div>
    )
}

export default Authors;