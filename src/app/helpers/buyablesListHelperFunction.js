import React from "react";
import Buyable from "../components/Buyable";

function buyablesListHelperFunction(props) {
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
  } = props;
  return buyablesObjects.map((buyable) => {
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
  });
}

export default buyablesListHelperFunction;
