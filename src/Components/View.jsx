import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'



function View({uploadVideoStatus}) {
  
  const [allVideo,setAllVideo] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)
  const getAllUploadedVideos = async ()=>{
  const response = await getAllVideos()
 //destructuring
  const {data} = response
 /*  console.log(data); */
 setAllVideo(data)

  }

  console.log(allVideo);

useEffect(()=>{
  getAllUploadedVideos() 
  //to delete the video one after another , set the setUploadVideoStatus to false
  setDeleteVideoStatus(false)
},[uploadVideoStatus,deleteVideoStatus])

  return (
    <div>
      <br></br>
      <Row>
        {allVideo.length>0?

        allVideo?.map((video)=>(<Col style={{marginTop:'10px'}} sm={12} md={6} lg={3} xl={3}>  <Videocard setDeleteVideoStatus={setDeleteVideoStatus} displayVideo ={video}/>
        </Col>))
        
        :
        <p>Nothing to display</p>
     
     
        }
        
      </Row>
      
     
       
    </div>
  )
}

export default View