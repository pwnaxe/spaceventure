import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import GameBoard from "../components/GameBoard";
import PlayerStats from "../components/PlayerStats";
import firebase from "./firebase.js";

const Home = () => {
  const [playerStats, setPlayerStats] = useState({});
  const [gameBoard, setGameBoard] = useState([]);

  useEffect(() => {}, []);

  const handlePlayerStatsUpdate = (newStats) => {
    setPlayerStats(newStats);
  };

  const handleGameBoardUpdate = (newBoard) => {
    setGameBoard(newBoard);
  };

  return (
    <Layout>
      <Head>
        <title>SpaceVenture</title>
      </Head>
      <PlayerStats stats={playerStats} onUpdate={handlePlayerStatsUpdate} />
      <GameBoard board={gameBoard} onUpdate={handleGameBoardUpdate} />
    </Layout>
  );
};

export default Home;
