import React, { useEffect } from "react";
import nFormatter from "../helpers/nFormatter";

function Buyable({
  buyablesObjects,
  setBuyablesObjects,
  buyable,
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
}) {
  let { price, id, description, name } = buyable;

  // The % that a purchases price will increase after each purchase
  const logarithmicIncrease = 1.07;

  function implementBuyable(buyable) {
    // If able to buy
    if (cashCount >= buyable.price && !buyable.disabled) {
      // Decrease price
      setCashCount(cashCount - buyable.price);
      // Apply all benefits of the upgrade (if they exist)
      setFatayerMultiplier(fatayerMultiplier + buyable.fatayerMultiplier);
      setFatayerPerClick(fatayerPerClick + buyable.perClickIncrease);
      setFatayerPrice(fatayerPrice, buyable.priceIncrease);
      setFatayerPerSecond(fatayerPerSecond + buyable.passiveIncomeIncrease);
      // Increment count and price in buyable objects list
      buyablesObjects.forEach((buyable) => {
        if (buyable.id === id) {
          // Disables upgrade if is singleUpgrade
          if (buyable.singleUpgrade) {
            buyable.disabled = true;
          }
          buyable.price = (logarithmicIncrease * buyable.price).toFixed(2);
          buyable.count++;
          setBuyablesObjects(buyablesObjects);
        }
      });
      // Special implementation if golden upgrade
      if (buyable.goldenThresholds.includes(buyable.count)) {
        multiplyBuyablePriceBy5AndIncreaseEfficacy();
      }
    } else {
      console.log(`You can't afford ${buyable.name}!`);
    }
  }

  // Used on golden upgrades
  function multiplyBuyablePriceBy5AndIncreaseEfficacy() {
    buyablesObjects.forEach((buyable) => {
      if (buyable.id === id) {
        buyable.price = (buyable.price * 5).toFixed(2);
        buyable.perClickIncrease += buyable.initialPerClickIncrease;
        buyable.passiveIncomeIncrease += buyable.initialPassiveIncomeIncrease;
        setBuyablesObjects(buyablesObjects);
      }
    });
  }

  function isUpgradeDisabled() {
    let isDisabled = false;
    buyablesObjects.forEach((buyable) => {
      if (buyable.id === id && buyable.disabled) {
        isDisabled = true;
      }
    });
    return isDisabled;
  }

  return (
    <div className="mt-2">
      <p className="font-bold text-green-500">{name}</p>
      <p>{description}</p>
      <p>{buyable.count}</p>
      <button
        // Gives golden upgrade at golden thresholds
        className={`text-black p-2 rounded-lg ${
          buyable.goldenThresholds.includes(buyable.count)
            ? "bg-yellow-500"
            : isUpgradeDisabled()
            ? "bg-gray-500"
            : "bg-green-500"
        }`}
        onClick={() => {
          if (!isUpgradeDisabled()) {
            implementBuyable(buyable);
          }
        }}
      >
        {isUpgradeDisabled() ? "SOLD OUT" : `${nFormatter(buyable.price)} KWD`}
      </button>
    </div>
  );
}

export default Buyable;
