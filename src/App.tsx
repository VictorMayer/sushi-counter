import { useState } from 'react'
import './App.css'
import Sushi from "./Sushi.tsx"

export interface Sushi {
  name: string;
  count: number;
}

function App() {
  
  const [sushis, setSushis] = useState<Sushi[]>([])
  const [sushiToCreate, setSushiToCreate] = useState("");

  function createNewSushi() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (sushiToCreate.trim() === "") {
      return;
    }

    const newSushi: Sushi = {
      name: sushiToCreate,
      count: 0
    }

    setSushis([...sushis, newSushi]);
  }

  return (
    <>
      <h1>Sushi Counter</h1>
      <div className="card">
        
        {sushis.length > 0 
        ? <></> 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        : sushis.map((s, _i) => {
           const info = s;
          return (
            <Sushi info={info} />
          )})}
      </div>
      <input placeholder='New Sushi' value={sushiToCreate} onClick={createNewSushi} onChange={(e) => setSushiToCreate(e.target.value)}></input>
      {/* <p className="read-the-docs">
        Click to add Sushi
      </p> */}
    </>
  )
}

export default App
