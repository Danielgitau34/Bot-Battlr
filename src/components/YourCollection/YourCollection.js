import React from 'react'
import Bot from '../Bot/Bot';

function YourCollection({selectedBots, handleSelection}) {
  return (
    <div>
      {selectedBots.map((bot, index) => (
        <div onClick={() => handleSelection(bot.id, "remove")}>
          <Bot bot={bot} key={index} />
        </div>
      ))}
    </div>
  );
}

export default YourCollection