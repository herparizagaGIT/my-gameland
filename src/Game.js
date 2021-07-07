import React, { useState } from 'react';

const useRandomScreen = (initialScreen) => {  
  const games = ["https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80", "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80", "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1531594896955-305cf81269f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"];
  const [game, setGame] = useState(initialScreen);
  const changeGame = () => {
    const index = Math.floor(Math.random() * games.length);
    const juegoElegido = games[index];
    setGame(juegoElegido);
  };
  return [game, changeGame];
};

const Game = () => {    
  const [game, changeGame] = useRandomScreen("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80");
  return (
    <div id="GAME" style={{ textAlign: "center", padding: "20px 0", backgroundColor: "black" }} >
      <img src={game} alt="PORTADA DE JUEGO" title="TU JUEGO" style={{ width: "58vw", height: "73vh" }}></img>
      <br/>
      <button id="GUESS" onClick={changeGame}>?</button>
    </div>
  );
};

export default Game;