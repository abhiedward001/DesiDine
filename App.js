import React from 'react'
import reactDOM from "react-dom/client";
export function App() {
  return (
    <div>
        <h1 className='text-red-400'>Hello world</h1>
    </div>
  )
}



const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);