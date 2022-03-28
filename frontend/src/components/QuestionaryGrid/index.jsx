import React, { useEffect, useState } from 'react';
import { usePesquisa } from '../../context/Context';

import { Container } from './styles';

const QuestionaryGrid = ({ dispatch }) => {
  const [ambiencia, setAmbiencia] = useState('');
  const [variedades, setVariedades] = useState('');
  const [praca, setPraca] = useState('');
  const [cinema, setCinema] = useState('');
  const [entretenimento, setEntretenimento] = useState('');
  const [acesso, setAcesso] = useState('');

  const { setNotas } = usePesquisa();

  useEffect(() => {
    setNotas({
      'Ambiência e limpeza': ambiencia,
      'Variedades de loja': variedades,
      'Praça de alimentação': praca,
      'Qualidade do cinema': cinema,
      'Entretenimento e Eventos': entretenimento,
      'Facilidade de acesso': acesso,
    });
  }, [acesso]);

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th className="top"></th>
            <th className="top">1</th>
            <th className="top">2</th>
            <th className="top">3</th>
            <th className="top">4</th>
            <th className="top">5</th>
          </tr>
          <tr>
            <th className="description">Ambiência e limpeza</th>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="ambiencia-limpeza1">
                  <input
                    type="radio"
                    name="ambiencia-limpeza"
                    onClick={e => setAmbiencia(e.target.value)}
                    id="ambiencia-limpeza1"
                    value="1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="ambiencia-limpeza2">
                  <input
                    type="radio"
                    name="ambiencia-limpeza"
                    onClick={e => setAmbiencia(e.target.value)}
                    id="ambiencia-limpeza2"
                    value="2"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="ambiencia-limpeza3">
                  <input
                    type="radio"
                    name="ambiencia-limpeza"
                    onClick={e => setAmbiencia(e.target.value)}
                    id="ambiencia-limpeza3"
                    value="3"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="ambiencia-limpeza4">
                  <input
                    type="radio"
                    name="ambiencia-limpeza"
                    onClick={e => setAmbiencia(e.target.value)}
                    id="ambiencia-limpeza4"
                    value="4"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="ambiencia-limpeza5">
                  <input
                    type="radio"
                    name="ambiencia-limpeza"
                    onClick={e => setAmbiencia(e.target.value)}
                    id="ambiencia-limpeza5"
                    value="5"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="description">Variedades de loja</th>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="variedades1">
                  <input
                    type="radio"
                    name="variedades"
                    onClick={e => setVariedades(e.target.value)}
                    id="variedades1"
                    value="1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="variedades2">
                  <input
                    type="radio"
                    name="variedades"
                    onClick={e => setVariedades(e.target.value)}
                    id="variedades2"
                    value="2"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="variedades3">
                  <input
                    type="radio"
                    name="variedades"
                    onClick={e => setVariedades(e.target.value)}
                    id="variedades3"
                    value="3"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="variedades4">
                  <input
                    type="radio"
                    name="variedades"
                    onClick={e => setVariedades(e.target.value)}
                    id="variedades4"
                    value="4"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="variedades5">
                  <input
                    type="radio"
                    name="variedades"
                    onClick={e => setVariedades(e.target.value)}
                    id="variedades5"
                    value="5"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="description">Praça de alimentação</th>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="alimentacao1">
                  <input
                    type="radio"
                    name="alimentacao"
                    onClick={e => setPraca(e.target.value)}
                    id="alimentacao1"
                    value="1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="alimentacao2">
                  <input
                    type="radio"
                    name="alimentacao"
                    onClick={e => setPraca(e.target.value)}
                    id="alimentacao2"
                    value="2"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="alimentacao3">
                  <input
                    type="radio"
                    name="alimentacao"
                    onClick={e => setPraca(e.target.value)}
                    id="alimentacao3"
                    value="3"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="alimentacao4">
                  <input
                    type="radio"
                    name="alimentacao"
                    onClick={e => setPraca(e.target.value)}
                    id="alimentacao4"
                    value="4"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="alimentacao5">
                  <input
                    type="radio"
                    name="alimentacao"
                    onClick={e => setPraca(e.target.value)}
                    id="alimentacao5"
                    value="5"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="description">Qualidade do Cinema</th>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="cinema1">
                  <input
                    type="radio"
                    name="cinema"
                    onClick={e => setCinema(e.target.value)}
                    id="cinema1"
                    value="1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="cinema2">
                  <input
                    type="radio"
                    name="cinema"
                    onClick={e => setCinema(e.target.value)}
                    id="cinema2"
                    value="2"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="cinema3">
                  <input
                    type="radio"
                    name="cinema"
                    onClick={e => setCinema(e.target.value)}
                    id="cinema3"
                    value="3"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="cinema4">
                  <input
                    type="radio"
                    name="cinema"
                    onClick={e => setCinema(e.target.value)}
                    id="cinema4"
                    value="4"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="cinema5">
                  <input
                    type="radio"
                    name="cinema"
                    onClick={e => setCinema(e.target.value)}
                    id="cinema5"
                    value="5"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="description">Entretenimento e Eventos</th>
            <td>
              <div className="option">
                <label
                  className="radio-container"
                  htmlFor="entretenimento-eventos1"
                >
                  <input
                    type="radio"
                    name="entretenimento-eventos"
                    onClick={e => setEntretenimento(e.target.value)}
                    id="entretenimento-eventos1"
                    value="1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label
                  className="radio-container"
                  htmlFor="entretenimento-eventos2"
                >
                  <input
                    type="radio"
                    name="entretenimento-eventos"
                    onClick={e => setEntretenimento(e.target.value)}
                    id="entretenimento-eventos2"
                    value="2"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label
                  className="radio-container"
                  htmlFor="entretenimento-eventos3"
                >
                  <input
                    type="radio"
                    name="entretenimento-eventos"
                    onClick={e => setEntretenimento(e.target.value)}
                    id="entretenimento-eventos3"
                    value="3"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label
                  className="radio-container"
                  htmlFor="entretenimento-eventos4"
                >
                  <input
                    type="radio"
                    name="entretenimento-eventos"
                    onClick={e => setEntretenimento(e.target.value)}
                    id="entretenimento-eventos4"
                    value="4"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label
                  className="radio-container"
                  htmlFor="entretenimento-eventos5"
                >
                  <input
                    type="radio"
                    name="entretenimento-eventos"
                    onClick={e => setEntretenimento(e.target.value)}
                    id="entretenimento-eventos5"
                    value="5"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="description">Facilidade de acesso</th>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="acesso1">
                  <input
                    type="radio"
                    name="acesso"
                    onClick={e => setAcesso(e.target.value)}
                    id="acesso1"
                    value="1"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="acesso2">
                  <input
                    type="radio"
                    name="acesso"
                    onClick={e => setAcesso(e.target.value)}
                    id="acesso2"
                    value="2"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="acesso3">
                  <input
                    type="radio"
                    name="acesso"
                    onClick={e => setAcesso(e.target.value)}
                    id="acesso3"
                    value="3"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="acesso4">
                  <input
                    type="radio"
                    name="acesso"
                    onClick={e => setAcesso(e.target.value)}
                    id="acesso4"
                    value="4"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
            <td>
              <div className="option">
                <label className="radio-container" htmlFor="acesso5">
                  <input
                    type="radio"
                    name="acesso"
                    onClick={e => setAcesso(e.target.value)}
                    id="acesso5"
                    value="5"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default QuestionaryGrid;
