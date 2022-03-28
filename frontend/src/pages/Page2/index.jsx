import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';
import { usePesquisa } from '../../context/Context';

import { Container, Content } from './styles';
import QuestionaryBox from '../../components/QuestionaryBox';
import image from '../../assets/calendar.png';

const Page2 = () => {
  const { setDiasSemana } = usePesquisa();
  return (
    <Container>
      <QuizHeader page={2} />
      <Content>
        <PrincipalQuote>
          Quais os dias da semana que você costuma vir ao Park Lagos?
        </PrincipalQuote>
        <QuestionaryBox image={image}>
          <div className="option">
            <label className="radio-container" htmlFor="seg-a-quin">
              <input
                onClick={e => setDiasSemana(e.target.value)}
                type="radio"
                name="page2"
                id="seg-a-quin"
                value="seg-a-quin"
              />
              <span className="checkmark"></span>
              De segunda a quinta
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor="todos-dias">
              <input
                onClick={e => setDiasSemana(e.target.value)}
                type="radio"
                name="page2"
                id="todos-dias"
                value="todos-dias"
              />
              <span className="checkmark"></span>
              Todos os dias
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor="dom-e-feriados">
              <input
                onClick={e => setDiasSemana(e.target.value)}
                type="radio"
                name="page2"
                id="dom-e-feriados"
                value="dom-e-feriados"
              />
              <span className="checkmark"></span>
              Domingos e feriados
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor="quando-necessario">
              <input
                onClick={e => setDiasSemana(e.target.value)}
                type="radio"
                name="page2"
                id="quando-necessario"
                value="quando-necessario"
              />
              <span className="checkmark"></span>
              Apenas quando necessário
            </label>
          </div>

          <div className="option">
            <label className="radio-container" htmlFor="sex-e-sab">
              <input
                onClick={e => setDiasSemana(e.target.value)}
                type="radio"
                name="page2"
                id="sex-e-sab"
                value="sex-e-sab"
              />
              <span className="checkmark"></span>
              Sextas e sábados
            </label>
          </div>
        </QuestionaryBox>
      </Content>
    </Container>
  );
};

export default Page2;
