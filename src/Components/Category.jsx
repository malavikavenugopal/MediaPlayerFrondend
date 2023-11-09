import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deleteCategory, getAVideo, getCategory, updateCategory, uploadCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import Videocard from './Videocard';


function Category() {
  const [show, setShow] = useState(false);
  const [allCategory, setAllCategory] = useState([])
  const [category, setCategory] = useState({

  })


  const handleAdd = async () => {
    console.log(category);

    if (category) {


      let body = {
        category,
        allVideos: []
      }
      const response = await uploadCategory(body)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.category} is successfully uploaded`)
        //making the state value none
        setCategory()
        //to close the modal
        handleClose()
      }
      else {
        toast.warning('something went wrong try again later')
        console.log(response)
      }
    }
    else {
      toast.warning("Please fill the category ")
    }

  }

  const getAllCategory = async () => {
    const { data } = await getCategory()
    setAllCategory(data)
  }
  console.log(allCategory)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleDelete = async (id) => {
    const response = await deleteCategory(id);
    console.log(response);
    //without refresh it will be deleted
    getAllCategory()
  }
  const dragover = (e) => {
    e.preventDefault()  //this will prevent reload so that the data that we send from videocard.jsx wont be lost
    console.log('inside dragover');
  }

const videodrop = async (e,id) =>{
  console.log(`dropped inside the category id :${id}`);
//to get the video id that is send from videocard component
  const videoid= e.dataTransfer.getData("videoID")
  console.log(videoid);

  //api to get the particular video that is dragged
  const {data} = await getAVideo(videoid)
  console.log(data);

//to find the specified category with the specified id which is dropped
  let selectCategory = allCategory.find(item=>item.id===id)
  

//push the videodata to the allvideo array
  selectCategory.allVideos.push(data)
  console.log(selectCategory);

await updateCategory(id,selectCategory)
//automatically updated without refresh
getAllCategory()




}


  useEffect(() => {
    getAllCategory()
  }, [])
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>

        <button style={{ width: '100%' }} onClick={handleShow} className='btn btn-warning'>Add New Categroy</button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: 'x-large' }}><i class="fa-solid fa-pencil text-warning"></i>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please Fill the Form Completely</p>
            <form className='border border-secondary p-3 rounded'>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategory(e.target.value)} />
              </Form.Group>


            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='btn-warning' variant="primary" onClick={handleAdd}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <br></br>
      <div >
      {
        allCategory?.length > 0 ?
          allCategory?.map((items) => (

            <div className='border border-secondary card'>
              <div style={{marginTop:'10px'}} className='d-flex justify-content-center align-items-center ' droppable onDragOver={(e) => dragover(e)}  
              onDrop={(e)=>videodrop(e,items?.id)}>

                <h5 style={{textAlign:'center',fontWeight:"bold"}}>
                  {items.category}
                </h5>
                <button className='btn'><i style={{ color: 'red'}} class="fa-solid fa-trash" onClick={() => handleDelete(items?.id)}></i></button>
              </div>
<Row >
  <Col sm={12} className='d-flex flex-column justify-content-center align-items-center' >
    {items.allVideos?.length>0?

items.allVideos.map(card=>(<Videocard displayVideo={card}/>))
   :<p>Nothing to display</p>
    
    
    }
  </Col>
</Row>
            </div>
          )) :
          <p>Nothing to display</p>
      }
        </div>
    

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>

  )
}

export default Category