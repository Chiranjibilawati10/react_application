import React from 'react';

const api = {
  key: "2fd99019e7172066fe8871e2944a0391",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
