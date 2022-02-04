import { useState } from "react";
import "./App.css";

//Components
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";

//LIB

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faStopwatch);

function App() {
  const [counters, setCounters] = useState([0]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {counters.length <= 2 ? (
          <button
            className="add-counter"
            onClick={() => {
              const newCounters = [...counters];
              if (newCounters.length <= 2) {
                newCounters.push(0);
              }

              setCounters(newCounters);
            }}
          >
            Add counter
          </button>
        ) : null}

        <div className="counters">
          {counters.map((counter, index) => {
            return (
              <Counter
                key={index}
                index={index}
                counter={counter}
                counters={counters}
                setCounters={setCounters}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
