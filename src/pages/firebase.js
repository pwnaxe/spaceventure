import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "api_key",
  authDomain: "auth_domain",
  projectId: "project_id",
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Home = () => {
  const [playerStats, setPlayerStats] = useState({});
  const [gameBoard, setGameBoard] = useState([]);

  useEffect(() => {
    const playerStatsRef = db.collection("players").doc("player1");
    playerStatsRef.onSnapshot((doc) => {
      setPlayerStats(doc.data());
    });

    const gameBoardRef = db.collection("gameBoard");
    gameBoardRef.onSnapshot((snapshot) => {
      const boardData = [];
      snapshot.forEach((doc) => {
        boardData.push(doc.data());
      });
      setGameBoard(boardData);
    });
  }, []);

  const handlePlayerStatsUpdate = (newStats) => {
    const playerStatsRef = db.collection("players").doc("player1");
    playerStatsRef.set(newStats, { merge: true });
  };

  const handleGameBoardUpdate = (newBoard) => {
    db.collection("gameBoard").doc(newBoard.id).set(newBoard, { merge: true });
  };

  return (
    <div>
      <h1>SpaceVenture</h1>
      <PlayerStats stats={playerStats} onUpdate={handlePlayerStatsUpdate} />
      <GameBoard board={gameBoard} onUpdate={handleGameBoardUpdate} />
    </div>
  );
};

export default Home;
