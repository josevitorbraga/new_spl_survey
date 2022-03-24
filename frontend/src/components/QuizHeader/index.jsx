import React from 'react';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'

import {Container, CurrentPageNumberContainer,PageCounter,Back} from './styles'

const QuizHeader = ({page}) => {
  const pages = [1,2,3,4,5,6,7]
  return(
    <Container>
      <Back>
        {page===1 ? (
          <Link to={'/'}><BsArrowLeft size={60}/></Link>

        ): (
          <Link to={`/${page-1}`}><BsArrowLeft size={60}/></Link>

        )}
      </Back>
      <PageCounter>
        {pages.map(number => (
          number <= page ? (
            <CurrentPageNumberContainer key={number} status="active">
            {number}
          </CurrentPageNumberContainer>
          ) : (
            <CurrentPageNumberContainer key={number}>
            {number}
          </CurrentPageNumberContainer>
          )
        ))}
      </PageCounter>
    </Container>
  )
}

export default QuizHeader