import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({ setUploadVideoStatus }) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: ""
  })
  console.log(video);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const embedvideoLink = (e) => {
    const { value } = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({ ...video, embedLink: link })
  }
  console.log(video);
  const handleUploadVideo = async () => {


    const { id, caption, url, embedLink } = video
    if (!id || !caption || !url || !embedLink) {
      toast.warning('please fill the form completely')
    }
    else {
      const response = await uploadAllVideo(video)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.caption}is successfully uploaded`)

        //to change the value of uploadVideoStatus
        setUploadVideoStatus(response.data)

        //making the state value none
        setVideo(
          {
            id: "",
            caption: "",
            url: "",
            embedLink: ""
          }
        )
        //to close the modal
        handleClose()
      }
      else {
        toast.error('something went wrong try again later')
        console.log(response)
      }
    }
  }
  return (
    <>
      <div>

        <h5>Upload New Video
          <button className='btn ' onClick={handleShow}><i class="fa-2x fa-solid fa-cloud-arrow-up"></i></button></h5>

      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 'x-large' }}><i class="fa-solid fa-film text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the Form</p>
          <form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter Video Youtube Video Link" onChange={embedvideoLink} />
            </Form.Group>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn-warning' onClick={handleUploadVideo} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>

  )
}

export default Add


