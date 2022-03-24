import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ff6e6d;
  border-radius: 8px 8px 8px 0;
`;

export const Content = styled.div`
  padding: 1em 3em 3em 3em;
  p {
    font-size: 3em;
    font-weight: 700;
  }
  h4 {
    color: #fff;
  }
`;

export const Bottom = styled.div`
  display: flex;
  height: 5em;
  .inicio {
    display: flex;
    width: 5em;
    background-color: #ff6e6d;
    .circulo {
      width: 5em;
      height: 100%;
      border-radius: 50% 0 0 0;
      background-color: #f1f0f0;
    }
  }
  .resto {
    flex: 1;
    display: flex;
    background-color: #f1f0f0;
  }
`;
