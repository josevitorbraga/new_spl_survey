import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 1em 8em;

  .image-question {
    display: flex;
    max-height: 34em;

    img {
      position: relative;
      height: 30em;
      right: 3em;
      top: 0;
      z-index: 1;
    }
  }

  .option {
    height: 110px;
    p {
      text-align: center;
    }
  }

  .dot {
    width: 30px;
    margin-left: 70px;
    margin-bottom: 50px;
    border-bottom: 4px solid #c8c8c8;
    border-radius: 50%;
  }
`;
