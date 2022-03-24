import React from 'react';
import QuizHeader from '../../components/QuizHeader';
import PrincipalQuote from '../../components/PrincipalQuote';

import { Container, Content } from './styles';
import QuestionaryGrid from '../../components/QuestionaryGrid';

const Page7 = () => {
  return (
    <Container>
      <QuizHeader page={6} />
      <Content>
        <PrincipalQuote>
          De 0 a 5, sendo a 5 a nota de maior valor, qual nota você atribui para
          cada um dos critérios abaixo?
        </PrincipalQuote>
        <QuestionaryGrid />
      </Content>
    </Container>
  );
};

export default Page7;
