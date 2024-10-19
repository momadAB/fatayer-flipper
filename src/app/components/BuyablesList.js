import React from "react";
import buyablesListHelperFunction from "../helpers/buyablesListHelperFunction";

function BuyablesList(props) {
  return (
    <div className="flex flex-col justify-center items-center p-3 text-center">
      <h1 className="bg-black w-full">UPGRADES</h1>
      {buyablesListHelperFunction(props)}
    </div>
  );
}

export default BuyablesList;
