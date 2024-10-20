import React from "react";

function Achievement({
  achievementsObjects,
  setAchievementsObjects,
  achievement,
  cashCount,
  setCashCount,
  fatayerPerClick,
  setFatayerPerClick,
  fatayerPerSecond,
  setFatayerPerSecond,
  fatayerPrice,
  setFatayerPrice,
  fatayerMultiplier,
  setFatayerMultiplier,
  fatayerCount,
  // Conditions
  clicksDone,
  setClicksDone,
}) {
  let {
    name,
    description,
    id,
    priceAddition,
    clickCount,
    fatayerCountCondition,
  } = achievement;

  // Returns true if achievement conditions are fulfilled
  function checkAchievementConditions() {
    if (
      !wasAchievmentClaimed() &&
      clicksDone >= clickCount &&
      fatayerCount >= fatayerCountCondition
    )
      return true;
    return false;
  }

  function applyRewards() {
    // Apply rewards
    setFatayerPrice(fatayerPrice + priceAddition);
    // Set achievement as claimed
    achievementsObjects.forEach((achievement) => {
      if (achievement.id === id) {
        achievement.wasClaimed = true;
        setAchievementsObjects(achievementsObjects);
      }
    });
  }

  // Returns true if the achievement has been claimed
  function wasAchievmentClaimed() {
    return achievement.wasClaimed;
  }

  return (
    <div className="mt-2">
      <p className="font-bold text-green-500">{name}</p>
      <p>{description}</p>
      <button
        // Gives choice of golden upgrade at golden thresholds
        className={`text-black p-2 rounded-lg ${
          checkAchievementConditions() ? "bg-yellow-500" : "bg-gray-500"
        }`}
        onClick={() => {
          if (checkAchievementConditions()) applyRewards();
        }}
      >
        {wasAchievmentClaimed() ? "CLAIMED" : "Claim"}
      </button>
    </div>
  );
}

export default Achievement;
{
}
