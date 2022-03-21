import React from 'react';
import {Bottom,Container,Content} from './styles'

const PrincipalQuote = ({children}) => {
  return(
    <Container>
      <Content>
        <h4>Shopping Park Lagos</h4>
        <p>{children}</p>
      </Content>
      <Bottom>
        <div className="inicio">
          <div className="circulo"></div>
        </div>
        <div className="resto"></div>
      </Bottom>
    </Container>
  )
}

export default PrincipalQuote