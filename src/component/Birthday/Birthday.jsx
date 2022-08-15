import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./Birthday.css";
const Birthday = () => {
  const [pepole, setPepole] = useState(data);
  return (
    <div>
      <main>
        <secrion className="container">
          <h3> {pepole.length} Birthday todays</h3>
          <List pepole={pepole} />
          <button onClick={() => setPepole([])}>remove all data</button>
        </secrion>
      </main>
    </div>
  );
};

export default Birthday;
