import React,{useState} from 'react';
import Weather from './Weather'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [weather] = useState({city:'Miami', temperature:'80F'})
  const [showWeather, setShowWeather] = useState(false)
  return (
    <div className="App">
      {showWeather ? <Weather weather={weather} /> : null }
      {counter}
      <br/>
      <button onClick={()=>setCounter(counter + 1)}>Increment</button>
      <button onClick={()=> setShowWeather(true)}>Show Weather</button>
    </div>
  );
}

export default App;
