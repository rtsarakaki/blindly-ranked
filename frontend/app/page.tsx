"use client"; 

import { useState } from 'react';

export default function Home() {

  const [jogadoresRanqueados, setJogadoresRanqueados] = useState(["primeiro lugar", "segundo lugar", "terceiro lugar", "quarto lugar", "quinto lugar"]);
  const jogadoresOpcao: string[] = ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5"];7
  const [posicaoAtual, setPosicaoAtual] = useState(0);

  function handleClick(posicaoClicada: number) {
    const novoJogadoresRanqueados = [...jogadoresRanqueados];
    novoJogadoresRanqueados[posicaoClicada] = jogadoresOpcao[posicaoAtual];
    setJogadoresRanqueados(novoJogadoresRanqueados);
    setPosicaoAtual (posicaoAtual+1)
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div className="border-2 bg-red-400" onClick={() => handleClick(0)}>{jogadoresRanqueados[0]}</div>
        <div className="border-2 bg-amber-200" onClick={() => handleClick(1)}>{jogadoresRanqueados[1]}</div>
        <div className="border-2 bg-green-400" onClick={() => handleClick(2)}>{jogadoresRanqueados[2]}</div>
        <div className="border-2 bg-blue-400" onClick={() => handleClick(3)}>{jogadoresRanqueados[3]}</div>
        <div className="border-2 bg-purple-400" onClick={() => handleClick(4)}>{jogadoresRanqueados[4]}</div>
      </div>
      <div className='border-4 bg-orange-400'>{jogadoresOpcao[posicaoAtual]}</div>
    </div>
  );
}
