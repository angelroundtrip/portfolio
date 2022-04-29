import React from 'react'
import { Header, Card, Image } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';
import Peru from './images/Peru.jpg'


function FrontPage() {

  return (
    <div>

      <Header className="left" as='h1'>Angel Rosario</Header>
      <hr></hr>
      <Image src={Peru} className='image' />

      <p></p>
      <Card className="center">
        Who am I?
          <p></p>I am an aspiring <b>software engineer</b>. 
          <p></p>I am an avid <b>traveler.</b>
          <p></p>I am an amateur <b>photographer.</b>
          <p></p>
        Want to learn more? Connect with me below. Check out my resume. Contact me.
      </Card>


      <div className="center">
      <SocialIcon className="social" url="https://www.linkedin.com/in/rosarioangel/"/>
      <SocialIcon className="social" url="https://github.com/angelroundtrip"/>
      <SocialIcon className="social" url="https://medium.com/@angelroundtrip"/>
      <SocialIcon className="social" url="https://instagram.com/angelroundtrip"/>
      {/* <SocialIcon className="social" url="https://twitter.com/angelroundtrip"/> */}
      </div>

      <p className="center">
        <a href="https://docs.google.com/document/d/1AQAaeIDD4yajFezINGpQzRz1_Xi4EO2pieaLRJ2nzTA"><Button variant="primary" style={{margin:'0.9%'}}>Resume</Button></a>
      </p>

      <p className="center" style={{color: 'teal', fontSize: '20px'}}>  
        <a href="mailto:angel@angelrosario.dev"> <Button>Contact</Button> </a> 
      </p>

    </div>
  )
}

export default FrontPage