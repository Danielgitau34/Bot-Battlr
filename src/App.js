import logo from "./logo.svg";
import "./App.css";
import BotCollection from "./components/BotCollection/BotCollection";
import { useState, useEffect } from "react";
import YourCollection from "./components/YourCollection/YourCollection";

function App() {
  const [botsCollection, setBortCollection] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  const fetchBots = async () => {
    const response = await fetch("http://localhost:8001/bots");
    const bots = await response.json();
    setBortCollection(bots);
  };

  const handleSelection = (id, action) => {
    const isPresent = selectedBots.find((bot) => bot.id === id);
    if (action === "add" && !isPresent) {
      const bot = botsCollection.find((bot) => bot.id === id);
      setSelectedBots([...selectedBots, bot]);
    } else if (action === "remove" && isPresent) {
      const newSelected = selectedBots.filter((bot) => bot.id !== id);
      setSelectedBots(newSelected);
    }
  };

  console.log("bots: ", botsCollection);
  useEffect(() => {
    fetchBots();
  }, []);

  return (
    <div className="App">
      <YourCollection
        selectedBots={selectedBots}
        handleSelection={handleSelection}
      />
      <BotCollection
        botsCollection={botsCollection}
        handleSelection={handleSelection}
      />
    </div>
  );
}

export default App;
