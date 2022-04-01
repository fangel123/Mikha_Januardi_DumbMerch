import React from 'react'
import mouse from './images/mouse.png'
import keyboard from './images/keyboard.png'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function card() {
  return (
    <div className='content d-flex'>
      <Link to='/detail'>
        <div className='cards'>
          <Card style={{ width: '241px' }}>
            <Card.Img variant="top" src={mouse} href='/detail'/>
            <Card.Body>
              <Card.Title className='card-title'>Mouse</Card.Title>
              <div className='card-description'>
                <Card.Text>
                  Rp.500.000
                </Card.Text>
                <Card.Text>
                  Stock : 600
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Link>
      
      <div className='cards'>
        <Card style={{ width: '241px' }}>
          <Card.Img variant="top" src={keyboard} />
          <Card.Body>
            <Card.Title className='card-title'>Keyboard</Card.Title>
            <div className='card-description'>
              <Card.Text>
                Rp.700.000
              </Card.Text>
              <Card.Text>
                Stock : 600
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
