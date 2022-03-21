import styled from 'styled-components';
import background from '../../assets/background-home.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 113em 71em;
`;

export const ImageContainer = styled.div`
  img{
    position: relative;
    right: 25em;
    height: 127vh;
  }
`;

export const TextContainer = styled.div`
  margin-left: 55%;
  display: flex;
  flex-direction: column;
  color: #333333;
  h1{
    font-size: 5em;
    font-weight: 800;

    span{
      background-color: #FF6E6D;
    }
  };
  a{
    display:flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0.6em;
    border-radius: 8px;
    font-size: 2em;
    font-weight: 700;
    background-color: #FF6E6D;
    color: #fff;
    border: 1px solid #FF6E6D;
    cursor: pointer;
    margin: 0 2em;
    box-shadow: 8px 8px 14px #bfbfbf;
  }
`;