import './App.css';
import Authors from './components/Authors';
import {Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import AuthorForm from './components/AuthorForm';
import Edit from './components/Edit';

function App() {
  const [allAuthors, setAllAuthors] = useState([])

  return (
    <div className="App">
      <h1 className='text-start ms-5'>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Authors allAuthors={allAuthors} setAllAuthors={setAllAuthors} />}/>
        <Route path='/addAuthor' element={<AuthorForm allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
