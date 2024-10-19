import React from "react";
import achievementsListHelperFunction from "../helpers/achievementsListHelperFunction";

function AchievementsList(props) {
  return (
    <div className="flex flex-col justify-center items-center p-3 text-center">
      <h1 className="bg-black w-full">ACHIEVEMENTS</h1>
      {achievementsListHelperFunction(props)}
    </div>
  );
}

export default AchievementsList;
