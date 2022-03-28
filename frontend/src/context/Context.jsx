import React, { createContext, useState, useContext, useEffect } from 'react';

const Context = createContext();

export default function ContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState({});

  const [frequencia, setFrequencia] = useState('');
  const [diasSemana, setDiasSemana] = useState('');
  const [motivo, setMotivo] = useState('');
  const [perguntaSorteio, setPerguntaSorteio] = useState('');
  const [meiosComunicação, setMeiosComunicação] = useState('');
  const [perguntaLazer, setPerguntaLazer] = useState('');
  const [notas, setNotas] = useState('');

  useEffect(() => {
    console.log(notas);
  }, [notas]);

  return (
    <Context.Provider
      value={{
        pesquisa,
        setPesquisa,
        diasSemana,
        setDiasSemana,
        frequencia,
        setFrequencia,
        motivo,
        setMotivo,
        perguntaSorteio,
        setPerguntaSorteio,
        meiosComunicação,
        setMeiosComunicação,
        perguntaLazer,
        setPerguntaLazer,
        notas,
        setNotas,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function usePesquisa() {
  const context = useContext(Context);
  if (!context) throw new Error('useCount must be used within a CountProvider');
  const {
    pesquisa,
    setPesquisa,
    diasSemana,
    setDiasSemana,
    frequencia,
    setFrequencia,
    motivo,
    setMotivo,
    perguntaSorteio,
    setPerguntaSorteio,
    meiosComunicação,
    setMeiosComunicação,
    perguntaLazer,
    setPerguntaLazer,
    notas,
    setNotas,
  } = context;
  return {
    pesquisa,
    setPesquisa,
    diasSemana,
    setDiasSemana,
    frequencia,
    setFrequencia,
    motivo,
    setMotivo,
    perguntaSorteio,
    setPerguntaSorteio,
    meiosComunicação,
    setMeiosComunicação,
    perguntaLazer,
    setPerguntaLazer,
    notas,
    setNotas,
  };
}
