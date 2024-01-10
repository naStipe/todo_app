import React from 'react';
import './App.css';
import './TodoUICard'
import TodoUICard from "./TodoUICard";

function App() {
  return (
      <div className="App flex flex-col items-center content-center h-full">
        <TodoUICard />
      </div>
  );
}

export default App;
