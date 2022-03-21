import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 4em;
`;

export const PageCounter = styled.div`
  display: flex;
`;

export const CurrentPageNumberContainer = styled.div`
  width: 2.5em;
  height: 2.5em;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${props => props.status === 'active' ? '1px solid #FF6E6D' : '1px solid #000'};
  background-color: ${props => props.status === 'active' ? '#FF6E6D' : 'inherit'};
  color: ${props => props.status === 'active' ? '#FFF' : 'inherit'};
  font-weight: 700;
`;

export const Back = styled.div`
  display:flex;
  color: #FF6E6D;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  a{
    text-decoration: none;

    &:visited{
      color: #FF6E6D;
    }
  }
`;