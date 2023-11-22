import { Button, TextField,  } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import DashboardIcon from '@mui/icons-material/Dashboard';

const AddBook = ({books,setBooks}) => {
   const navigate = useNavigate();

   //Validation
   const validationSchema = Yup.object({
   title: Yup.string().required('Title is required'),
   author: Yup.string().required('Author is required'),
   imageUrl: Yup.string().url('Invalid URL').required('Image Url is required'),
   publish: Yup.string().required('Published On is required'),
   sub: Yup.string().required('Objective is required'),
   });

   const formik = useFormik({
      initialValues:{
         title: '',
         imageUrl: '',
         author:'',
         publish: '',
         sub: '',
      },
      validationSchema: validationSchema,
      onSubmit: async(values)=>{
         const newBook ={
            image: values.imageUrl,
            title: values.title,
            author: values.author,
            publishedOn: values.publish,
            sub: values.sub,
         }
         const result = await fetch ("https://655c56e825b76d9884fd0169.mockapi.io/books",{
         method:"POST",
         body:JSON.stringify(newBook),
         headers:{
              'Content-Type':'application/json'
      }
    });
 const data  = await result.json()
 setBooks([...books,data])
 navigate('/books')
      }
   });
    
   // const [imageUrl, setImageUrl]= useState('')
   // const [title, setTitle] = useState('')
   // const [author,setAuthor] = useState('')
   // const [publish, setPublish] = useState('')
   // const [sub, setSub] = useState('')

//  const createBook = async ()=>{
//    const newBook ={
//       image:imageUrl,
//       title: title,
//       author: author,
//       publish:publish,
//       sub:sub,
//    }
//  const result = await fetch ("https://655c56e825b76d9884fd0169.mockapi.io/books",{
//    method:"POST",
//    body:JSON.stringify(newBook),
//    headers:{
//       'Content-Type':'application/json'
//    }
//  });
//  const data  = await result.json()
//  setBooks([...books,data])
//  navigate('/books')


  return (
   <div>
          <Button  onClick={() => navigate("/")}><DashboardIcon/></Button>
 
    <div className='look2'>
       <h2>Here we can see Add New Book List ✔ </h2>
       <div className='text-field'>
     <TextField 
     id="standard-basic" 
     label="Title" 
     fullWidth sx={{m:1 }}
     variant="standard"
     type="text" 
      //   value = {title} 
      //   onChange={(e)=>setTitle(e.target.value)}
      {...formik.getFieldProps('title')}
      error={formik.touched.title && Boolean(formik.errors.title)}
      helperText={formik.touched.title && formik.errors.title}
         />

         <TextField 
     id="standard-basic" 
     label="Image Url" 
     fullWidth sx={{m:1 }}
     variant="standard"
     type="text" 
      //   value = {imageUrl} 
      //   onChange={(e)=>setImageUrl(e.target.value)}
      {...formik.getFieldProps('imageUrl')}
      error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
      helperText={formik.touched.imageUrl && formik.errors.imageUrl}
         />

     <TextField 
     id="standard-basic" 
     label="Aurthor" 
     fullWidth sx={{m:1 }}
     variant="standard"
     type="text" 
      //   value = {author} 
      //   onChange={(e)=>setAuthor(e.target.value)}
      {...formik.getFieldProps('author')}
      error={formik.touched.author && Boolean(formik.errors.author)}
      helperText={formik.touched.author && formik.errors.author}
        />
     <TextField 
     id="standard-basic" 
     label="Published On " 
     fullWidth sx={{m:1 }}
     variant="standard" 
     type="text" 
      //   value = {publish} 
      //   onChange={(e)=>setPublish(e.target.value)}
      {...formik.getFieldProps('publish')}
      error={formik.touched.publish && Boolean(formik.errors.publish)}
      helperText={formik.touched.publish && formik.errors.publish}
        />
     <TextField 
     id="standard-basic" 
     label="Objective" 
     fullWidth sx={{m:1 }}
     variant="standard" 
     type="text" 
      //   value = {sub}
      //    onChange={(e)=>setSub(e.target.value)}
      {...formik.getFieldProps('sub')}
      error={formik.touched.sub && Boolean(formik.errors.sub)}
      helperText={formik.touched.sub && formik.errors.sub}
        />
        <br></br>
        <div className='bot'>
        <Button 
        variant="contained"
        color='success' 
        onClick={formik.handleSubmit}>
          Add Book</Button>
          </div>
    </div>
  </div>
</div>
  )
}

export default AddBook