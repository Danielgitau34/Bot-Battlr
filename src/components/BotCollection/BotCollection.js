import React from "react";
import Bot from "../Bot/Bot";
import "./BotCollection.css";

function BotCollection({ botsCollection, handleSelection }) {
  return (
    <div className="bots-collection">
      {botsCollection.map((bot, index) => (
        <div onClick={() => handleSelection(bot.id, "add")}>
          <Bot bot={bot} key={index} />
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
