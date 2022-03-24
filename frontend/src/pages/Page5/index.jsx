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
            <label className="radio-container" htmlFor="lojas">
              <input type="radio" name="page4" id="lojas" value="lojas" />
              <span className="checkmark"></span>
              Lojas
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="eventos">
              <input type="radio" name="page4" id="eventos" value="eventos" />
              <span className="checkmark"></span>
              Eventos
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="cinema">
              <input type="radio" name="page4" id="cinema" value="cinema" />
              <span className="checkmark"></span>
              Cinema
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="alimentacao">
              <input
                type="radio"
                name="page4"
                id="alimentacao"
                value="alimentacao"
              />
              <span className="checkmark"></span>
              Alimentação
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container" htmlFor="espacos-infantis">
              <input
                type="radio"
                name="page4"
                id="espacos-infantis"
                value="espacos-infantis"
              />
              <span className="checkmark"></span>
              Espaços infantis
            </label>
          </div>
        </QuestionaryBox>
      </Content>
    </Container>
  );
};

export default Page5;
