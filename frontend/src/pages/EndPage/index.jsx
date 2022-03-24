import React from 'react';

import { Container, ImageContainer, TextContainer } from './styles';

import image from '../../assets/thumbs.png';
import hearth from '../../assets/hearth-end.svg';
const EndPage = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <img src={image} alt="thumbs" />
        </ImageContainer>
        <TextContainer>
          <div className="hearth">
            <img src={hearth} alt="hearth" />
          </div>
          <div className="text">
            <h1>Obrigado pelo seu tempo!</h1>
            <p>Suas respostas nos ajudarão a melhorar o Park Lagos.</p>
          </div>
        </TextContainer>
      </Container>
    </>
  );
};

export default EndPage;
