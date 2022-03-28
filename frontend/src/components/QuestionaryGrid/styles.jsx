import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 140px;
  justify-content: center;
  padding: 3em 4em;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 4px 4px 4px #0001;
  margin: 0 6em;

  th {
    padding-right: 7em;
  }

  th.top {
    padding-left: 2em;
  }

  .option {
    height: 47px;
  }
  .selected {
    background-color: #ff6e6d;
    .inner {
      background-color: #fff;
    }
  }

  td.dash {
    background-color: #000;
    width: 1em;
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
