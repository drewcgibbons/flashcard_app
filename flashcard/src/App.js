import React from "react";
import logo from './logo.svg';
import './App.css';


function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.word)
      });
  }, []);

  // console.log(data.message);
  // console.log(data.message.word);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
