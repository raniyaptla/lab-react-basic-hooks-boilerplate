import React,{ useState } from 'react';
import './App.css';
import Story from './Components/Story';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Story/>
    </ToggleTheme.Provider>
  );
}

export default App;