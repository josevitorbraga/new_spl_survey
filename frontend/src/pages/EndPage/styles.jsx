import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  position: relative;
  left: -150px;
`;

export const TextContainer = styled.div`
  position: relative;
  right: 150px;
  margin-top: 12em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4em;
  }

  p {
    font-size: 1.3em;
    font-weight: 300;
    color: #333333;
  }

  .hearth {
    position: absolute;
    bottom: 250px;
  }
`;
