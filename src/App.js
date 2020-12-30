import './App.css';
import React, {useState, useEffect} from 'react'
import useColor from './hooks/useColor';
import HadithBox from './components/HadithBox/HadithBox';
const randomNumber = (data) => Math.floor(Math.random() * data.length);
function App() {
  const [hadiths, colors] = useColor();
  const [color, setColor] = useState("");
  const [hadith, setHadith] = useState({});


  const getRandomData = () => {
    setColor(colors[randomNumber(colors)])
    setHadith(hadiths[randomNumber(hadiths)])
  }
  
  useEffect(() => {
    setColor(colors[randomNumber(colors)])
    setHadith(hadiths[randomNumber(hadiths)])   
  }, [colors, hadiths])

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <HadithBox hadith={hadith} action={getRandomData} color={color} />
    </div>
  );
}

export default App;
