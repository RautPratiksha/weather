
import './App.css';
import Weather from './components/Weather'
function App() {
  const url="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=4a8e70c77eff48b0bcb381458e894b4f&q=";

  return (
   <>
   <Weather url={url}/>
   </>
  );
}

export default App;
