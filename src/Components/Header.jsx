import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-video fa-beat text-warning'></i>{'  '}Video Player

            </Link>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header