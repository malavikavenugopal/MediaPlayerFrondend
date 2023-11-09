import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}}className='d-flex justify-content-center align-items-center flex-column'>
 <div className='footer d-flex justify-content-center align-items-center' >
  <div className='website' style={{width:'400px',marginLeft:'-20px'}}>
 <h4><i className='fa-solid fa-video  text-warning'></i>{'  '}Video Player</h4> 
  <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dicta, ea minima accusantium magnam placeat sequi, quasi saepe rerum explicabo dolore hic distinctio pariatur quia fugiat nostrum at temporibus sed!</h6>
  
  
  </div>
  <div className='links d-flex flex-column' style={{marginLeft
  :'120px'}}>
    <h4>Links</h4>
    
    <Link style={{textDecoration:'none',color:'white'}}  to={'./'}>Landing Page</Link>
    <Link style={{textDecoration:'none',color:'white'}}  to={'./home'}>Home</Link>
    <Link  style={{textDecoration:'none',color:'white'}} to={'./WatchHistory'}>WatchHistory</Link>
    <br></br>


  </div>
  <div className='guides' style={{marginLeft
  :'120px'}}>
    <h4>Guides</h4>
   
    <div className='d-flex flex-column' >
    <Link  style={{textDecoration:'none',color:'white'}} to={'https://react.dev/'}>React</Link>
    <Link  style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}>React Bootstrap</Link>
    <Link  style={{textDecoration:'none',color:'white'}} to={'https://bootswatch.com/'}>Bootswatch</Link>
    <br></br>
    </div>
   

  </div>
  <div className='contact' style={{marginLeft
  :'120px'}}>
    <h4>Contact Us</h4>
    <div className='d-flex '>
      <input className='form-control' placeholder='Enter your email id'/>
      <button style={{padding:'5px',color:'white'}} className='btn-warning ms-3 rounded-3'>Subscribe</button>
      </div>
      <div className='d-flex' style={{marginTop:'40px'}}>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'20px'}} to={''}><i class="fa-brands fa-2x fa-instagram"></i></Link>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'50px'}} to={''}><i class="fa-brands fa-2x fa-facebook"></i></Link>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'50px'}} to={''}><i class="fa-brands fa-2x fa-linkedin"></i></Link>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'50px'}} to={''}><i class="fa-brands fa-2x fa-whatsapp"></i></Link>
      </div>
     

  </div>

    </div>
    <br></br>
    <p>Copyright &#169; 2023 Media PLayer.Built with React</p>
    </div>
   
  )
}

export default Footer