import React from 'react'
import { Header } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons';


function FrontPage() {

  return (
    <div className="front">

      <Header style={{margin:'left'}} as='h1'>Angel Rosario</Header>
      <hr></hr>

      <Header as='h2'></Header>
      <SocialIcon className="social" url="https://www.linkedin.com/in/rosarioangel/"/>
      <SocialIcon className="social" url="https://github.com/angelroundtrip"/>
      <SocialIcon className="social" url="https://medium.com/@angelroundtrip"/>
      <SocialIcon className="social" url="https://instagram.com/angelroundtrip"/>

      <p>
        <a href="https://docs.google.com/document/d/1AQAaeIDD4yajFezINGpQzRz1_Xi4EO2pieaLRJ2nzTA"><button style={{width:'10%'}}>Resume</button></a>
      </p>

      <p style={{color: 'teal', fontSize: '20px'}}>  
        <span><a href="mailto:angel@angelrosario.dev"> Contact</a> </span>
      </p>

    </div>
  )
}

export default FrontPage