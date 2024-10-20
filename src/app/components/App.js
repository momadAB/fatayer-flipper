import React from "react";
import { useState, useEffect } from "react";
import BuyablesList from "./BuyablesList";
import AchievementsList from "./AchievementsList";
import Fatayer from "./Fatayer";
import buyablesArrayOfObjects from "../data/buyablesArrayOfObjects";
import achievementsArrayOfObjects from "../data/achievementsArrayOfObjects";
import Background from "./Background";

import getFormattedNumberPart from "../helpers/getFormattedNumberPart";
import getFormattedSymbolPart from "../helpers/getFormattedSymbolPart";
import getColorForSymbol from "../helpers/getColorForSymbol";

import { Agdasima } from "next/font/google";

// Import font
const agdasima = Agdasima({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Importing react-animated-numbers package for use
// import dynamic from "next/dynamic";
// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });

import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";

function App() {
  // Statistics and conditions
  const [fatayerCount, setFatayerCount] = useState(0);
  const [cashCount, setCashCount] = useState(0);
  const [fatayerPrice, setFatayerPrice] = useState(1);
  const [clicksDone, setClicksDone] = useState(0);

  // Player ability statistics
  const [fatayerPerClick, setFatayerPerClick] = useState(1);
  const [fatayerPerSecond, setFatayerPerSecond] = useState(0);
  const [fatayerMultiplier, setFatayerMultiplier] = useState(1); // Multiplies fatayer per click

  // Imported data objects. They need a changeable format for price changes and conditions
  const [buyablesObjects, setBuyablesObjects] = useState(
    buyablesArrayOfObjects
  );
  const [achievementsObjects, setAchievementsObjects] = useState(
    achievementsArrayOfObjects
  );

  function bakeFatayerByHand() {
    setFatayerCount(fatayerCount + fatayerPerClick * fatayerMultiplier);
    setCashCount(
      cashCount + fatayerPrice * fatayerPerClick * fatayerMultiplier
    );
    setClicksDone(clicksDone + 1);
  }

  function bakeFatayerPassively() {
    setFatayerCount(fatayerCount + fatayerPerSecond);
    setCashCount(cashCount + fatayerPrice * fatayerPerSecond);
  }

  // Logic for baking fatayers per second
  useEffect(() => {
    const interval = setInterval(() => {
      // Runs this once a second
      bakeFatayerPassively();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [bakeFatayerPassively]);
  // Must be dependent on bakeFatayerPassively,
  // otherwise the functions relied upon variables (fatayerPerSecond) will stay as their initial value inside bakeFatayerPassively

  return (
    <div className={`${agdasima.className} text-xl`}>
      {/* Animated Background */}
      <Background />
      {/* Page */}
      <div className="m-auto h-svh grid grid-rows-2 grid-cols-4">
        {/* Clicker section */}
        <div className="h-full w-full row-span-2 col-span-3 flex flex-wrap-reverse justify-center items-center relative">
          {/* Clickable Fatayer */}
          <Fatayer
            fatayerCount={fatayerCount}
            fatayerPerClick={fatayerPerClick}
            cashCount={cashCount}
            bakeFatayer={bakeFatayerByHand}
          />
          {/* Stats section */}
          <div className="text-left absolute top-0 left-0 select-none flex items-center">
            <h1 className="mr-1">{`FATAYERS BAKED: `}</h1>
            <AnimatedNumber
              // includeComma
              hasComma={true}
              // animateToNumber={fatayerCount}
              value={fatayerCount}
              size={20}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
          </div>

          <div className="text-left absolute top-4 left-0 select-none flex items-center">
            <h1 className="mr-1">{"FATAYER PER CLICK: "}</h1>
            <AnimatedNumber
              // includeComma
              hasComma={true}
              size={20}
              value={fatayerPerClick * fatayerMultiplier}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
          </div>

          <div className="text-left absolute top-8 left-0 select-none flex items-center ">
            <h1 className="mr-1">{"FATAYER PRICE: "}</h1>
            <AnimatedNumber
              // includeComma
              hasComma={true}
              size={20}
              value={getFormattedNumberPart(fatayerPrice)}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
            <h1 className="ml-1">{getFormattedSymbolPart(fatayerPrice)} KWD</h1>
          </div>
          {/* Cash Count */}
          <div
            className={`absolute top-8 select-none ${getColorForSymbol(
              getFormattedSymbolPart(cashCount)
            )}`}
          >
            <div className="flex m-auto justify-center text-7xl items-center">
              <AnimatedNumber
                // includeComma
                hasComma={true}
                size={72}
                value={getFormattedNumberPart(cashCount)}
                configs={[{ mass: 1, tension: 220, friction: 100 }]}
              />
              <h1>{getFormattedSymbolPart(cashCount)}</h1>
              <h2 className="ml-3">KWD</h2>
            </div>

            <div className="text-center select-none flex text-xl m-auto basis-full justify-center items-center">
              <h1 className="mr-1">{"FATAYER PER SECOND: "}</h1>
              <AnimatedNumber
                // includeComma
                hasComma={true}
                value={fatayerPerSecond}
                size={20}
                configs={[{ mass: 1, tension: 220, friction: 100 }]}
              />
            </div>
          </div>
          {/* Credits */}
          <h1 className="absolute select-none bottom-0">
            Created by Mohammad Baqer. KWD stands for Kuwaiti Dinar.
          </h1>
        </div>

        {/* 
          As a heads up, many of the properties being passed down here are unnecessary 
          I only passed them down for if I want to add more features later
        */}
        {/* Upgrades section */}
        <div
          className={`bg-gradient-to-r from-gray-950 to-gray-900 h-full w-full flex flex-col overflow-scroll border-4 border-fuchsia-700 opacity-80`}
        >
          <BuyablesList
            cashCount={cashCount}
            setCashCount={setCashCount}
            fatayerPerClick={fatayerPerClick}
            setFatayerPerClick={setFatayerPerClick}
            fatayerPerSecond={fatayerPerSecond}
            setFatayerPerSecond={setFatayerPerSecond}
            fatayerPrice={fatayerPrice}
            setFatayerPrice={setFatayerPrice}
            buyablesObjects={buyablesObjects}
            setBuyablesObjects={setBuyablesObjects}
            fatayerMultiplier={fatayerMultiplier}
            setFatayerMultiplier={setFatayerMultiplier}
          />
        </div>
        {/* Achievements section */}
        <div
          className={`bg-gradient-to-r from-gray-950 to-gray-900 h-full w-full flex flex-col overflow-scroll border-4 border-fuchsia-700 opacity-80`}
        >
          <AchievementsList
            cashCount={cashCount}
            setCashCount={setCashCount}
            fatayerPerClick={fatayerPerClick}
            setFatayerPerClick={setFatayerPerClick}
            fatayerPerSecond={fatayerPerSecond}
            setFatayerPerSecond={setFatayerPerSecond}
            fatayerPrice={fatayerPrice}
            setFatayerPrice={setFatayerPrice}
            buyablesObjects={buyablesObjects}
            setBuyablesObjects={setBuyablesObjects}
            fatayerMultiplier={fatayerMultiplier}
            setFatayerMultiplier={setFatayerMultiplier}
            achievementsObjects={achievementsObjects}
            setAchievementsObjects={setAchievementsObjects}
            fatayerCount={fatayerCount}
            // Conditions
            clicksDone={clicksDone}
            setClicksDone={setClicksDone}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
