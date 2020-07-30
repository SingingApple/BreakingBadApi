import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(res.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <div className="container">
      <Header></Header>
      <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
    </div>
  );
}

export default App;
