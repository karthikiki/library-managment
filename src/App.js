import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import { useEffect, useState } from 'react';
import UpdateBook from './Components/UpdateBook';

function App() {
  const [books,setBooks] = useState([]);
  
  useEffect(()=>{
    const result = async ()=>{
      try {
        const response = await fetch('https://655c56e825b76d9884fd0169.mockapi.io/books',{
          method:"GET"
        })
        const data = await response.json();
        console.log(data)
        setBooks([...data])
      } catch (error) {
        console.log(error.message)
      }
    }
    result();
  },[])
  
  return (
    <div className='App'>
      <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/books" element={<BookList books={books} setBooks={setBooks}/>}/>
          <Route exact path="/add" element={<AddBook books={books} setBooks={setBooks}/>}/>
          <Route exact path="/edit/:id/" element={<UpdateBook books={books} setBooks={setBooks}/>}/>
      </Routes>
    </div>
  );
}

export default App;
