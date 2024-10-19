import React from "react";
import Achievement from "../components/Achievement";

function achievementsListHelperFunction(props) {
  let {
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
  } = props;

  return achievementsObjects.map((achievement) => {
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
  });
}

export default achievementsListHelperFunction;
