import React from "react";
import Buyable from "./Buyable";

function BuyablesList({
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
}) {
  return (
    <div className="flex flex-col justify-center items-center p-3 text-center">
      {buyablesObjects.map((buyable) => {
        return (
          <Buyable
            key={buyable.id}
            cashCount={cashCount}
            setCashCount={setCashCount}
            buyable={buyable}
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
          />
        );
      })}
    </div>
  );
}

export default BuyablesList;
