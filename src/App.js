import React, {useState} from 'react';
import './App.css';

import Header from './components/Header'
import TurtForm from './components/TurtForm'
import TurtContainer from './components/TurtContainer'


const App = () => {
  const [display, setDisplay] = useState(false)
  // set your turts here!
  const [turts, setTurts] = useState([])

  return (
    <>
      <Header/>
      { display
          ?
        <TurtForm/>
          :
        null
      }
      <div className="buttonContainer">
        <button onClick={() => setDisplay(!display)}> Add a Turt </button>
      </div>
      <TurtContainer turts={turts} />
    </>
  );

}

export default App;
