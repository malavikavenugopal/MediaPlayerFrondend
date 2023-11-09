import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandinPage() {
  const navigateByUrl = useNavigate()
  return (

    <Container>
      <Row className='d-flex align-items-center justigy-content-center'>
        <Col></Col>
        <Col lg={5}>
<h3>Welcome to<span className='text-warning'> Media Player</span> </h3>
<br></br>
<p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis, harum non unde esse distinctio omnis. Magni vel, corporis fuga tempore commodi impedit nihil illum eum officia velit at veniam!</p>
<br></br>
        
        <button style={{padding:'5px',color:'white'}} className='rounded-3 btn-warning' onClick={()=>navigateByUrl('/home')}>Get Start <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif'/>
        </Col>

      </Row>
      <h4 style={{textAlign:'center'}}>Features</h4>
      <div className='d-flex justify-content-center align-items-center'>
     
<div  style={{padding:'60px'}} >
<Card style={{ width: '22rem' }} >
      <Card.Img variant="top" style={{height:"300px",width:'300px',marginLeft:'25px',marginTop:'10px'}}  src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
<div  style={{padding:'60px'}}>
<Card style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{height:"300px",width:'300px',marginLeft:'25px',marginTop:'10px'}}  src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div  style={{padding:'60px'}}>
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{height:"300px",width:'300px',marginLeft:'25px',marginTop:'10px'}}  src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    
</div>
      </div>
      
      <div className='border border-2 border-secondary'>
        <Container>
          <Row>
            <Col lg={5}>
              <h3 className='text-warning'>Simple fast and 
              <br></br>Powerful</h3>
              <div>
             <p><span style={{fontSize:'x-large',fontWeight:'bold'}}> Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
             <p><span style={{fontSize:'x-large',fontWeight:'bold'}}>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia labore,Mollitia animi exercitationem laborum officiis enim eum earum?</p> 
             <p><span style={{fontSize:'x-large',fontWeight:'bold'}}>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia labore, excepturi a quaerat ab, beatae optio maiores molestias dolorum id quasi. </p>   
              </div>
            </Col>
            <Col></Col>
            <Col lg={6} style={{marginTop:'10px'}} >
            <iframe width="590" height="360" src="https://www.youtube.com/embed/szvt1vD0Uug" title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>

  )
}

export default LandinPage