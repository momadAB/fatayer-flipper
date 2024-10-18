import React from "react";
import { useState, useEffect } from "react";
import BuyablesList from "./BuyablesList";
import AchievementsList from "./AchievementsList";
import Fatayer from "./Fatayer";
import buyablesArrayOfObjects from "../data/buyablesArrayOfObjects";
import achievementsArrayOfObjects from "../data/achievementsArrayOfObjects";
import Background from "./Background";

import nFormatter from "./nFormatter";

import styles from "./styles.module.css";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

function App() {
  const [fatayerCount, setFatayerCount] = useState(0);
  const [cashCount, setCashCount] = useState(0);
  const [fatayerPrice, setFatayerPrice] = useState(1);
  const [fatayerPerClick, setFatayerPerClick] = useState(1);
  const [fatayerPerSecond, setFatayerPerSecond] = useState(0);
  const [buyablesObjects, setBuyablesObjects] = useState(
    buyablesArrayOfObjects
  );
  const [achievementsObjects, setAchievementsObjects] = useState(
    achievementsArrayOfObjects
  );
  const [fatayerMultiplier, setFatayerMultiplier] = useState(1); // Multiplies fatayer per click

  // Conditions
  const [clicksDone, setClicksDone] = useState(0);

  // Done by clicking fatayer manually
  function bakeFatayerByHand() {
    setFatayerCount(fatayerCount + fatayerPerClick * fatayerMultiplier);
    setCashCount(
      cashCount + fatayerPrice * fatayerPerClick * fatayerMultiplier
    );
    setClicksDone(clicksDone + 1);
  }

  // Passive fatayer gained per second
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
  }, [bakeFatayerPassively]); // Must be dependent on bakeFatayerPassively,
  // otherwise the functions relied upon variables (fatayerPerSecond) will stay as their initial value inside bakeFatayerPassively

  // Function to get the numeric part of the formatted number
  function getFormattedNumberPart(num, digits = 3) {
    const formatted = nFormatter(num, digits);
    return parseFloat(formatted).toFixed(3); // Extract numeric part
  }

  // Function to get the symbol part of the formatted number
  function getFormattedSymbolPart(num, digits = 3) {
    const formatted = nFormatter(num, digits);
    return formatted.replace(parseFloat(formatted), ""); // Extract symbol part
  }

  // Function to determine the color based on the symbol
  function getColorForSymbol(symbol) {
    switch (symbol) {
      case "k":
        return "text-green-300";
      case "M":
        return "text-blue-300";
      case "G":
        return "text-purple-300";
      case "T":
        return "text-orange-300";
      case "P":
        return "text-red-300";
      case "E":
        return "text-red-400";
      default:
        return "text-white"; // Default color for no symbol or other cases
    }
  }

  return (
    <>
      <Background />
      {/* Page */}
      <div className="m-auto h-svh grid grid-rows-2 grid-cols-4">
        {/* Clicker section */}
        <div className="h-full w-full row-span-2 col-span-3 flex flex-wrap-reverse justify-center items-center relative">
          {/* Button wrapper */}
          <Fatayer
            fatayerCount={fatayerCount}
            fatayerPerClick={fatayerPerClick}
            cashCount={cashCount}
            bakeFatayer={bakeFatayerByHand}
          />
          <div className="text-left absolute top-0 left-0 select-none flex">
            <h1 className="mr-1">{"FATAYERS BAKED: "}</h1>
            <AnimatedNumbers
              includeComma
              animateToNumber={fatayerCount}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
          </div>

          <div className="text-left absolute top-4 left-0 select-none flex">
            <h1 className="mr-1">{"FATAYER PER CLICK: "}</h1>
            <AnimatedNumbers
              includeComma
              animateToNumber={fatayerPerClick * fatayerMultiplier}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
          </div>

          <div className="text-left absolute top-28 select-none flex">
            <h1 className="mr-1">{"FATAYER PER SECOND: "}</h1>
            <AnimatedNumbers
              includeComma
              animateToNumber={fatayerPerSecond}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
          </div>

          <div className="text-left absolute top-8 left-0 select-none flex">
            <h1 className="mr-1">{"FATAYER PRICE: "}</h1>
            <AnimatedNumbers
              includeComma
              animateToNumber={getFormattedNumberPart(fatayerPrice)}
              configs={[{ mass: 1, tension: 220, friction: 100 }]}
            />
            <h1 className="ml-1">{getFormattedSymbolPart(fatayerPrice)} KWD</h1>
          </div>
          {/* Cash Count */}
          {/* Have to wrap each piece of text in a div because whitespaces dont show and whitespace-prewrap breaks the number animation */}
          <div
            className={`text-right absolute top-8 text-6xl select-none flex flex-nowrap ${getColorForSymbol(
              getFormattedSymbolPart(cashCount)
            )}`}
          >
            <h1 className="flex">
              <AnimatedNumbers
                includeComma
                // className="text-blue-400"
                animateToNumber={getFormattedNumberPart(cashCount)}
                configs={[{ mass: 1, tension: 220, friction: 100 }]}
              />
              {getFormattedSymbolPart(cashCount)}
            </h1>
            <h1 className="ml-4">Dinar</h1>
          </div>
          {/* Credits */}
          <h1 className="absolute select-none bottom-0">
            Created by Mohammad Baqer. KWD stands for Kuwaiti Dinar.
          </h1>
        </div>

        {/* Upgrades: increase fatayer price */}
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
        {/* Buildings: increase fatayer per click (clickBuilding)
                    or increase passive fatayer per second (passiveBuilding)*/}
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
            // Conditions
            clicksDone={clicksDone}
            setClicksDone={setClicksDone}
          />
        </div>
      </div>
    </>
  );
}

export default App;
