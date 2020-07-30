import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";

function App() {
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);
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
    </div>
  );
}

export default App;
