import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';
import { usePesquisa } from '../../context/Context';

import { Container, Content } from './styles';
import QuestionaryBox from '../../components/QuestionaryBox';
import image from '../../assets/pin.png';

const Page1 = () => {
  const { setFrequencia } = usePesquisa();

  return (
    <Container>
      <QuizHeader page={1} />
      <Content>
        <PrincipalQuote>
          Com que frequência você costuma visitar shoppings de maneira geral?
        </PrincipalQuote>
        <QuestionaryBox image={image}>
          <div className="option">
            <label className="radio-container" htmlFor="<1vezmes">
              <input
                onClick={e => setFrequencia(e.target.value)}
                type="radio"
                name="page1"
                id="<1vezmes"
                value="<1vezmes"
              />
              <span className="checkmark"></span>
              Menos de 1 vez por mês
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor="1vezmes">
              <input
                onClick={e => setFrequencia(e.target.value)}
                type="radio"
                name="page1"
                id="1vezmes"
                value="1vezmes"
              />
              <span className="checkmark"></span>1 vez por mês
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor="1vezacada15">
              <input
                onClick={e => setFrequencia(e.target.value)}
                type="radio"
                name="page1"
                id="1vezacada15"
                value="1vezacada15"
              />
              <span className="checkmark"></span>1 vez a cada 15 dias
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor=">1vezporsemana">
              <input
                onClick={e => setFrequencia(e.target.value)}
                type="radio"
                name="page1"
                id=">1vezporsemana"
                value=">1vezporsemana"
              />
              <span className="checkmark"></span>
              Mais de uma vez por semana
            </label>
          </div>
        </QuestionaryBox>
      </Content>
    </Container>
  );
};

export default Page1;
