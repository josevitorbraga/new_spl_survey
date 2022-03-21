import React from 'react';
import {Link} from 'react-router-dom'

import {Container,TextContainer} from './styles'

const Home = () => {
  return(
    <Container>
      <TextContainer>
        <h1>
          <span className='destaque'>Nos ajude</span><br/>
          a melhorar<br/>
          nossa<br/>
          experiência.
        </h1>
        <Link to="/1">Responder</Link>
      </TextContainer>
    </Container>
  )
}

export default Home