import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 7em;
  position: relative;
  bottom: 6em;

  .image {
    img {
      position: relative;

      height: 30em;
    }
  }
`;

export const Options = styled.div`
  height: 15em;
  background-color: #fff;
  box-shadow: 4px 4px 4px #c8c8c8;
  padding: 2.5em;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  border-radius: 3em;
  margin-left: 5%;
  /* Customize the label (the container) */

  > div {
    margin-right: 6em;
  }

  .radio-container {
    display: block;
    position: relative;
    padding-left: 70px;
    margin-bottom: 24px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    background-color: #eee;
    border: 1px solid #c8c8c8;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .radio-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .radio-container input:checked ~ .checkmark {
    background-color: #ff6e6d;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radio-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .radio-container .checkmark:after {
    top: 15px;
    left: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
  }
`;

export const Separator = styled.div`
  display: ${props => (props.theme === 'breadcrumb' ? 'flex' : 'box')};
  align-items: center;
  .radio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-left: 70px;
    margin-bottom: 24px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    background-color: #eee;
    border: 1px solid #c8c8c8;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .radio-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .radio-container input:checked ~ .checkmark {
    background-color: #ff6e6d;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radio-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;
