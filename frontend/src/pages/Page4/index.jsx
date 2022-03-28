import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';
import { usePesquisa } from '../../context/Context';

import { Container, Content } from './styles';
import QuestionaryBox from '../../components/QuestionaryBox';

const Page4 = () => {
  const { setPerguntaSorteio } = usePesquisa();
  return (
    <Container>
      <QuizHeader page={4} />
      <Content>
        <PrincipalQuote>
          “Prefiro participar de um sorteio e concorrer a um prêmio como um
          carro okm do que participar de um compre e ganhe, juntando nota fiscal
          para trocar por um presente menor.”
        </PrincipalQuote>
        <QuestionaryBox className="breadcrumb" typo="breadcrumb">
          <div className="option">
            <label className="radio-container custom-height" htmlFor="lojas">
              <input
                onClick={e => setPerguntaSorteio(e.target.value)}
                type="radio"
                name="page4"
                id="lojas"
                value="lojas"
              />
              <span className="checkmark"></span>
              Lojas
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container custom-height" htmlFor="eventos">
              <input
                onClick={e => setPerguntaSorteio(e.target.value)}
                type="radio"
                name="page4"
                id="eventos"
                value="eventos"
              />
              <span className="checkmark"></span>
              Eventos
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label className="radio-container custom-height" htmlFor="cinema">
              <input
                onClick={e => setPerguntaSorteio(e.target.value)}
                type="radio"
                name="page4"
                id="cinema"
                value="cinema"
              />
              <span className="checkmark"></span>
              Cinema
            </label>
          </div>

          <div className="dot"></div>

          <div className="option">
            <label
              className="radio-container custom-height"
              htmlFor="alimentacao"
            >
              <input
                onClick={e => setPerguntaSorteio(e.target.value)}
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
            <label
              className="radio-container custom-height"
              htmlFor="espacos-infantis"
            >
              <input
                onClick={e => setPerguntaSorteio(e.target.value)}
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

export default Page4;
