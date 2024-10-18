import React from "react";
import { useState, useEffect } from "react";
import BuyablesList from "./BuyablesList";
import AchievementsList from "./AchievementsList";
import Fatayer from "./Fatayer";
import buyablesArrayOfObjects from "../data/buyablesArrayOfObjects";
import achievementsArrayOfObjects from "../data/achievementsArrayOfObjects";

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

  return (
    <>
      {/* Page */}
      <div className="bg-black m-auto h-svh grid grid-rows-2 grid-cols-4">
        {/* Clicker section */}
        <div className="bg-amber-800 h-full w-full row-span-2 col-span-3 flex flex-wrap-reverse justify-center items-center relative">
          {/* Button wrapper */}
          <Fatayer
            fatayerCount={fatayerCount}
            fatayerPerClick={fatayerPerClick}
            cashCount={cashCount}
            bakeFatayer={bakeFatayerByHand}
          />
          <h1 className="text-left absolute top-0 left-0 select-none">
            FATAYERS BAKED: {fatayerCount}
          </h1>
          <h1 className="text-left absolute top-4 left-0 select-none">
            FATAYER PER CLICK: {fatayerPerClick * fatayerMultiplier}
          </h1>
          <h1 className="text-left absolute top-8 left-0 select-none">
            FATAYER PER SECOND: {fatayerPerSecond}
          </h1>
          <h1 className="text-left absolute top-12 left-0 select-none">
            FATAYER PRICE: {fatayerPrice}
          </h1>
          <h1 className="text-right absolute top-0 right-0 text-6xl select-none">
            ${cashCount}
          </h1>
        </div>
        {/* Upgrades: increase fatayer price */}
        <div className="bg-red-800 h-full w-full flex flex-col overflow-scroll">
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
        <div className="bg-blue-800 h-full w-full flex flex-col overflow-scroll">
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
