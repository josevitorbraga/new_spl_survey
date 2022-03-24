import React from 'react';

import { Container, Select } from './styles';

const QuestionaryGrid = () => {
  const handleSelect = id => {
    const element = document.getElementById(id);
    element.classList.toggle('selected');
  };

  //TODO!!

  return (
    <Container>
      <table>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
        <tr>
          <th className="description">Ambiência e limpeza</th>
          <td>
            <Select onClick={() => handleSelect(1)} id="1">
              <div className="inner"> </div>
            </Select>
          </td>
          <td>
            <Select onClick={() => handleSelect(2)} id="2">
              <div className="inner"> </div>
            </Select>
          </td>
          <td>
            <Select onClick={() => handleSelect(3)} id="3">
              <div className="inner"> </div>
            </Select>
          </td>
          <td>
            <Select onClick={() => handleSelect(4)} id="4">
              <div className="inner"> </div>
            </Select>
          </td>
          <td>
            <Select onClick={() => handleSelect(5)} id="5">
              <div className="inner"> </div>
            </Select>
          </td>
        </tr>
        <tr>
          <th className="description">Variedades de loja</th>
          <td>
            <Select />
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <th className="description">Praça de alimentação</th>
          <td>
            <Select />
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <th className="description">Qualidade do Cinema</th>
          <td>
            <Select />
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <th className="description">Entretenimento e Eventos</th>
          <td>
            <Select />
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <th className="description">Facilidade de acesso</th>
          <td>
            <Select />
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <th className="description">Qualidade do Cinema</th>
          <td>
            <Select />
          </td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
      </table>
    </Container>
  );
};

export default QuestionaryGrid;
