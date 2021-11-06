import { useEffect, useState } from "react";
import "./App.css";
import AppContainer from "./components/AppContainer";

function App() {
  const [studantsList, setStudantsList] = useState([]);
  const [randomStudants, setRandomStudants] = useState([]);

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setStudantsList(response));
  }, []);

  function random() {
    let arr = [];
    while (arr.length < 3) {
      let number = Math.floor(Math.random() * studantsList.length - 1) + 1;
      if (arr.indexOf(number) === -1) {
        if (
          arr.filter((obj) => {
            if (obj.house === studantsList[number].house) return true;
          }).length === 0
        ) {
          arr.push(studantsList[number]);
        }
      }
    }
    return setRandomStudants(arr);
  }

  function showImage(student) {
    switch (student.house) {
      case "Gryffindor":
        return (
          <img
            src="https://i.ibb.co/D14b644/gryffindor.png"
            alt="gryffindor"
            className="Gryffindor"
          />
        );

      case "Slytherin":
        return (
          <img
            src="https://i.ibb.co/1ZtHn6F/slytherin.png"
            alt="slytherin"
            className="Slytherin"
          />
        );

      case "Hufflepuff":
        return (
          <img
            src="https://i.ibb.co/T0HvKVJ/hufflepuff.png"
            alt="hufflepuff"
            className="Hufflepuff"
          />
        );

      case "Ravenclaw":
        return (
          <img
            src="https://i.ibb.co/858g2C6/ravenclaw.png"
            alt="ravenclaw"
            className="Ravenclaw"
          />
        );

      default:
        return (
          <img
            src="https://i.ibb.co/vm3X37p/source-other-uid-A8-E7-B116-C894-4-EFE-B24-C-A29-A285-D36-A3-1636224010623-origin-gallery-fte-source.jpg"
            alt="no_defined_house"
            className="NoHouse"
          />
        );
    }
  }

  console.log(randomStudants);

  return (
    <div className="App">
      <AppContainer
        randomStudants={randomStudants}
        random={random}
        showImage={showImage}
        setRandomStudants={setRandomStudants}
      />
    </div>
  );
}

export default App;
