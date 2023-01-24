import React from "react";
import "./Bot.css";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillShieldFill, BsLightningChargeFill } from "react-icons/bs";

function Bot({ bot }) {
  return (
    <div className="bot">
      <img src={bot.avatar_url} alt="avatar" />
      <div className="bot-info">
        <h1 className="bot-name">{bot.name}</h1>
        <p className="catchphrase">{bot.catchphrase}</p>
        <div className="vitals">
          <div>
            <FaHeartbeat />
            {bot.health}
          </div>
          <div>
            <BsLightningChargeFill />
            {bot.damage}
          </div>
          <div>
            <BsFillShieldFill />
            {bot.armor}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bot;
