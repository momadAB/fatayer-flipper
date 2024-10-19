import React from "react";
import Buyable from "./Buyable";
import Achievement from "./Achievement";

function AchievementsList({
  cashCount,
  setCashCount,
  setFatayerPrice,
  fatayerPerClick,
  setFatayerPerClick,
  fatayerPerSecond,
  setFatayerPerSecond,
  fatayerPrice,
  buyablesObjects,
  setBuyablesObjects,
  fatayerMultiplier,
  setFatayerMultiplier,
  achievementsObjects,
  setAchievementsObjects,
  clicksDone,
  setClicksDone,
}) {
  return (
    <div className="flex flex-col justify-center items-center p-3 text-center">
      <h1 className="bg-black w-full">ACHIEVEMENTS</h1>
      {achievementsObjects.map((achievement) => {
        return (
          <Achievement
            key={achievement.id}
            cashCount={cashCount}
            setCashCount={setCashCount}
            achievement={achievement}
            buyablesObjects={buyablesObjects}
            setBuyablesObjects={setBuyablesObjects}
            fatayerPerClick={fatayerPerClick}
            setFatayerPerClick={setFatayerPerClick}
            fatayerPerSecond={fatayerPerSecond}
            setFatayerPerSecond={setFatayerPerSecond}
            fatayerPrice={fatayerPrice}
            setFatayerPrice={setFatayerPrice}
            fatayerMultiplier={fatayerMultiplier}
            setFatayerMultiplier={setFatayerMultiplier}
            achievementsObjects={achievementsObjects}
            setAchievementsObjects={setAchievementsObjects}
            // Conditions for achievements
            clicksDone={clicksDone}
            setClicksDone={setClicksDone}
          />
        );
      })}
    </div>
  );
}

export default AchievementsList;
