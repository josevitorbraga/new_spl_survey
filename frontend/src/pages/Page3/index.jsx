import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';

import {Container,Content} from './styles'
import QuestionaryBox from '../../components/QuestionaryBox';
import image from '../../assets/hearth.png'

const Page3 = () => {

  return (
    <Container>
      <QuizHeader page={3}/>
      <Content>
        <PrincipalQuote>
        O que motivou você vir hoje ao Park Lagos?
        </PrincipalQuote>
        <QuestionaryBox image={image}>
          <div className="option">
            
            <label className='radio-container' htmlFor="lojas">
              <input type="radio" name="page3" id="lojas" value='lojas' />
              <span className="checkmark"></span>
              Lojas
            </label>
          </div>

          <div className="option">
            
            <label className='radio-container' htmlFor="eventos">
              <input type="radio" name="page3" id="eventos" value='eventos' />
              <span className="checkmark"></span>
              Eventos
            </label>
          </div>

          <div className="option">
            
            <label className='radio-container' htmlFor="cinema">
              <input type="radio" name="page3" id="cinema" value='cinema' />
              <span className="checkmark"></span>
              Cinema
            </label>
          </div>  

          <div className="option">
            
            <label className='radio-container' htmlFor="espacos-infantis">
              <input type="radio" name="page3" id="espacos-infantis" value='espacos-infantis' />
              <span className="checkmark"></span>
              Espaços infantis
            </label>
          </div>

          <div className="option">
            
            <label className='radio-container' htmlFor="alimentacao">
              <input type="radio" name="page3" id="alimentacao" value='alimentacao' />
              <span className="checkmark"></span>
              Opções de alimentação
            </label>
          </div>

        </QuestionaryBox>
      </Content>
    </Container>
  );
};

export default Page3;
