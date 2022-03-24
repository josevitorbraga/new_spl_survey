import React from 'react';

import { Container, Options, Separator } from './styles';

const QuestionaryBox = ({ typo, image, children }) => {
  return (
    <>
      <Container>
        {image ? (
          <div className="image">
            <img src={image} alt="current" />
          </div>
        ) : (
          <></>
        )}
        <Options>
          {typo === 'breadcrumb' ? (
            <Separator theme={typo}>{children}</Separator>
          ) : (
            <div>{children}</div>
          )}
        </Options>
      </Container>
    </>
  );
};

export default QuestionaryBox;
