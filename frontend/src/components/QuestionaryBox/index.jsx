import React from 'react';

import {Container,Options} from './styles'

const QuestionaryBox = ({image,children}) => {
  return(
    <>
      
      <Container>
        <div className="image">
          <img src={image} alt="current" />
        </div>
        <Options>
          <div>
          {children}

          </div>
        </Options>
      </Container>

    </>
  )
}

export default QuestionaryBox;