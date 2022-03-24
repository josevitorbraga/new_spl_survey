import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';

import { Container, Content } from './styles';
import QuestionaryBox from '../../components/QuestionaryBox';
import image from '../../assets/bag.png';

const Page6 = () => {
  return (
    <Container>
      <QuizHeader page={6} />
      <Content>
        <div className="image-question">
          <PrincipalQuote>
            “Nos fins de semana, o Park Lagos é uma ótima opção. Tem tudo que eu
            preciso, encontro boas opções de lazer e alimentação.”
          </PrincipalQuote>
          <img src={image} alt="shopping-bag" />
        </div>
        <QuestionaryBox typo="breadcrumb">
          <div className="option">
            <label className="radio-container" htmlFor="concordo-totalmente">
              <input
                type="radio"
                name="page6"
                id="concordo-totalmente"
                value="concordo-totalmente"
              />
              <span className="checkmark"></span>
              <p>Concordo totalmente</p>
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="concordo">
              <input type="radio" name="page6" id="concordo" value="concordo" />
              <span className="checkmark"></span>
              <p>Concordo</p>
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="nao-concordo">
              <input
                type="radio"
                name="page6"
                id="nao-concordo"
                value="nao-concordo"
              />
              <span className="checkmark"></span>
              <p>Neutro</p>
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="discordo">
              <input type="radio" name="page6" id="discordo" value="discordo" />
              <span className="checkmark"></span>
              <p>Discordo</p>
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="discordo-totalmente">
              <input
                type="radio"
                name="page6"
                id="discordo-totalmente"
                value="discordo-totalmente"
              />
              <span className="checkmark"></span>
              <p>Discordo totalmente</p>
            </label>
          </div>
        </QuestionaryBox>
      </Content>
    </Container>
  );
};

export default Page6;
