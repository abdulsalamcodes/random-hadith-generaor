import './App.css';
import React, { useState, useEffect } from 'react'
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
    <div className="app" style={{ backgroundColor: color }}>
      <div className="app__logo__wrapper">
        <h2 className="app__logo">بسم الله الرحمن الرحيم</h2>
      </div>
      <div className="app__content">
      <HadithBox hadith={hadith} action={getRandomData} color={color} />

      </div>

    </div>
  );
}

export default App;
