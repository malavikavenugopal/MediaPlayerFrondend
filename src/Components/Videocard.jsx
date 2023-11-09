import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToWatch, deleteVideos } from '../services/allAPI';

function Videocard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)

    const { caption, embedLink } = displayVideo
    const today = new Date
    let timeStamp = new Intl.DateTimeFormat('en-US', {

      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today)
    console.log(timeStamp);

    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }
    await addToWatch(videoDetails)
  }

  const removeVideo = async (id) => {
    const response = await deleteVideos(id);
    console.log(response);
    setDeleteVideoStatus(true)
  }


  const dragStarted = (e, id) => {
    console.log(`card no: ${id} started dragging`);
    e.dataTransfer.setData("videoID", id)
  }

  return (
    <div>

      <div   >
        <Container>
          <Card style={{ width: '15rem' }} draggable onDragStart={(e) => dragStarted(e, displayVideo?.id)} >
            <Card.Img variant="top" style={{ height: "300px" }} onClick={handleShow} src={displayVideo.url} />
            <Card.Body>
              <Card.Title style={{ fontSize: 'medium' }}>{displayVideo.caption}
                <br></br>
                <button className='btn' style={{ marginLeft: '140px' }} onClick={() => removeVideo(displayVideo?.id)}>
                  <i style={{ backgroundColor: 'red', padding: '10px', borderRadius: '5px' }} class="fa-solid fa-trash"></i>
                </button>
              </Card.Title>
            </Card.Body>
          </Card>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: 'medium' }}>{displayVideo.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe width="460" height="360" src={`${displayVideo.embedLink}?autoplay=1`} title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </Modal>
        </Container>

      </div>

    </div>

  )
}

export default Videocard