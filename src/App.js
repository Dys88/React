import React, { useState } from "react";

const App = () => {
  {/* Setting the inital value & updated value as num & set num */}
  const [num,setNum]= useState(0);
  {/* For Addition */}
  const addNum = () => {
      setNum (num+1);
  };
  {/* For Substraction */}
  const subNum = () => {
      setNum (num-1);  
  };
  {/* For Increament */}
  const plusNum = () => {
      setNum (num + 5);  
  };
  {/* For Reset */}
  const resetNum = () => {
      setNum (0);  
  };
   return (
    <div className="App">
      <header className="App-header">
        <div>
        {/* Display digit */}
        <h1> {num}  </h1>
        {/* Click Add button */}
        <button onClick={addNum} > Addition </button>
        {/* Click Sub button */}
        <button  onClick={subNum} > Subtract </button>
        {/* Click increament button */}
        <button  onClick={plusNum} > Increase by 5 </button>
        {/* Click reset button */}
        <button  onClick={resetNum} > Reset </button>
        </div>
      </header>
    </div>
  );
}
export default App;
