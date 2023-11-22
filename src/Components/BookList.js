import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DashboardIcon from '@mui/icons-material/Dashboard';

const BookList = ({books,setBooks}) => {
  const navigate = useNavigate();

  //Delete
  const deleteBook = async(listId)=>{
    const response = await fetch(`https://655c56e825b76d9884fd0169.mockapi.io/books/${listId}`,{
      method:"DELETE"
    })
    const data= await response.json()
    if(data){
      const remainBooks = books.filter((book)=>book.id !== listId)
      setBooks(remainBooks)
    }
  }
  return (
    <div>
    <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
    <div className='look2'>

        <h2>Here we can see Books List </h2>
      
        <div className='card-container'>
        {books&&books.map((book,idx)=>(
        <Card  sx={{ maxWidth: 355 }} key={idx} >
            <CardMedia component="img" alt={book.title} height="380" image={book.image} />
           <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               <b>{book.title}</b>
               </Typography>
               <Typography variant="body2" color="text.secondary">
                <b> Author:</b> {book.author}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                <b>Published :</b> {book.publish}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                <b>Objective :</b> {book.sub}
               </Typography>
              
          </CardContent>
        <div>
        <CardActions className='button'>
          <Button 
           varient="outlined" 
           startIcon={<EditIcon/>}
           onClick={()=>navigate(`/edit/${idx}`)}
           > 
            Edit
            </Button>
          <Button  
          varient="outlined" 
          startIcon={<DeleteIcon/>} 
          onClick={()=>deleteBook(book.id)}>
            Delete
           </Button>
        </CardActions>
        </div>
      </Card>
        ))}  
    </div> 
        </div>
        </div>
  )
}

export default BookList