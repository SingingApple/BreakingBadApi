import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const getQuery = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(res.data);
      setItems(res.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={getQuery}></Search>
      <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
    </div>
  );
}

export default App;
