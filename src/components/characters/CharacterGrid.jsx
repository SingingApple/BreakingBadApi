import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        // <Card key={item.id} item={item}></Card>
        <h2 key={item.char_id}>{item.name}</h2>
      ))}
    </section>
  );
};

export default CharacterGrid;
