import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

const UpdateBook = ({books,setBooks}) => {
  const navigate = useNavigate()
  const{id} = useParams();
  const editBook = books[id];
  
  const [image, setImage]= useState('')
  const [title, setTitle] = useState('')
   const [author,setAuthor] = useState('')
   const [publish, setPublish] = useState('')
   const [sub, setSub] = useState('')

   useEffect(()=>{
    if(editBook){
      setImage(editBook.image)
      setTitle(editBook.title )
      setAuthor(editBook.author )
      setPublish(editBook.publish )
      setSub(editBook.sub )
    }
   },[editBook])

   const updateBook = async ()=>{
    const updated ={
       image: image,
       title: title,
       author: author,
       publish:publish,
       sub:sub,
    }
    const result = await fetch (`https://655c56e825b76d9884fd0169.mockapi.io/books/${editBook.id}`,{
    method:"PUT",
    body:JSON.stringify(updated),
    headers:{'Content-Type':'application/json'}
  })
  const data1  = await result.json()
  // setBook([...book ,data1])
  // navigate('/')
  if(data1){
    console.log(updated)
    books[id] = updated
    setBooks([...books]);
    navigate("/books")
  }
}
  return (
    <div>
       <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
    
    <div className='look2'>
    <h2>Update Book:  📝  </h2>
    <div className='text-field'>
  <TextField 
  id="outlined-basic" 
  label="Title" 
  fullWidth sx={{m:1 }}
  variant="outlined"
  type="text" 
     value = {title} 
     onChange={(e)=>setTitle(e.target.value)}
      />

      <TextField 
     id="outlined-basic" 
     label="ImageUrl" 
     fullWidth sx={{m:1 }}
     variant="outlined"
     type="text" 
        value = {image} 
        onChange={(e)=>setImage(e.target.value)}/>

  <TextField 
  id="outlined-basic" 
  label="Aurthor" 
  fullWidth sx={{m:1 }}
  variant="outlined"
  type="text" 
     value = {author} 
     onChange={(e)=>setAuthor(e.target.value)}
     />
  <TextField 
  id="outlined-basic" 
  label="Published On " 
  fullWidth sx={{m:1 }}
  variant="outlined" 
  type="text" 
     value = {publish} 
     onChange={(e)=>setPublish(e.target.value)}
     />
  <TextField 
  id="outlined-basic" 
  label="Objective" 
  fullWidth sx={{m:1 }}
  variant="outlined" 
  type="text" 
     value = {sub}
      onChange={(e)=>setSub(e.target.value)}
     />
     <br></br>
     <div className='bot'>
     <Button 
     variant="contained" 
    //  size='small'
     onClick={updateBook}>
       Update</Button>
     </div>
   </div>
  </div>
</div>  

  )
}

export default UpdateBook
