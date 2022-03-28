import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';

import { Container, Content } from './styles';
import QuestionaryBox from '../../components/QuestionaryBox';

const Page5 = () => {
  return (
    <Container>
      <QuizHeader page={5} />
      <Content>
        <PrincipalQuote>
          Durante o seu dia, quais dos meios de comunicação abaixo você prefere
          utilizar para se manter informado?
        </PrincipalQuote>
        <QuestionaryBox typo="breadcrumb">
          <div className="option">
            <label className="radio-container custom-height" htmlFor="tv">
              <input type="radio" name="page4" id="tv" value="tv" />
              <span className="checkmark"></span>
              TV
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container custom-height" htmlFor="radio">
              <input type="radio" name="page4" id="radio" value="radio" />
              <span className="checkmark"></span>
              Rádio
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label
              className="radio-container custom-height"
              htmlFor="internet-rede-social"
            >
              <input
                type="radio"
                name="page4"
                id="internet-rede-social"
                value="internet-rede-social"
              />
              <span className="checkmark"></span>
              Internet/Redes sociais
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container custom-height" htmlFor="jornal">
              <input type="radio" name="page4" id="jornal" value="jornal" />
              <span className="checkmark"></span>
              Jornal
            </label>
          </div>
        </QuestionaryBox>
      </Content>
    </Container>
  );
};

export default Page5;
