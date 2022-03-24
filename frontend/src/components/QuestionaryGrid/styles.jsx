import styled from 'styled-components';

export const Container = styled.div`
  .selected {
    background-color: #ff6e6d;
    .inner {
      background-color: #fff;
    }
  }
`;

export const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #c8c8c8;
  height: 50px;
  width: 50px;
  background-color: #c8c8c8;
  border-radius: 50%;
  .inner {
    border-radius: 50%;
    height: 17px;
    width: 17px;
    background-color: #c8c8c8;
  }
`;
