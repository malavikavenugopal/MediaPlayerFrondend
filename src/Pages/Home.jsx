import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import WatchHistory from './WatchHistory'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
import Add from '../Components/Add'
import { useState } from 'react'

function Home() {
  const [uploadVideoStatus,setUploadVideoStatus] = useState({})
  return (
    <div>
      
    
<Row style={{marginTop:'40px'}}>
  <Col lg={1}></Col>
  <Col lg={6}> <Add setUploadVideoStatus={setUploadVideoStatus} /></Col>
  <Col lg={2}></Col>
  <Col lg={2}>
    <Link to={'./WatchHistory'} style={{textDecoration:'none',color:'white',fontSize:'x-large',marginLeft:'50px'}}>Watch History</Link>
  
  </Col>
</Row>
<Row>
  <Col lg={1}></Col>
  <Col lg={8}>

    
    <h5>All Videos</h5>
    <View uploadVideoStatus={uploadVideoStatus}/>
   
  
  </Col>

  <Col lg={3}>
    <Container>  <Category/></Container>
 
   
  </Col>

</Row>

      
    </div>
  )
}

export default Home