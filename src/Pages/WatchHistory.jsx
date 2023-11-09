import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

import { deleteHistory, getWatchHistory } from '../services/allAPI'


function WatchHistory() {
  const [history, setHistory] = useState([])
  const getWatchHistoryVideo = async () => {
    const response = await getWatchHistory()
    const {data} = response
    console.log(data);
    setHistory(data)
  }
  console.log(history);

const handleDelete = async(id)=>{
  const response = await deleteHistory(id);
  console.log(response);
  //without refresh it will be deleted
  getWatchHistoryVideo()
}

  useEffect(() => {
    getWatchHistoryVideo()
  }, [])
  return (
    <div>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <h3>Watch History</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                history.length > 0?
                history.map((item)=> (<tr>
                <td>{item.id}</td>
                <td>{item.caption}</td>
                <td>
              <a href={item.embedLink} >{item.embedLink}</a>
                </td>
                <td>{item.timeStamp}</td>
                <td><button className='btn' onClick={()=>handleDelete(item?.id)}><i style={{color:'red'}} class="fa-solid fa-trash"></i></button></td>
              </tr>
                ) ) : <p>Nothing to display</p>
             }


            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default WatchHistory