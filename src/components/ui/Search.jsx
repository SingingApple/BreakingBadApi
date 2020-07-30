import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search Characters"
          className="form-control"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
