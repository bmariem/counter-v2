import React from "react";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ counter, index, counters, setCounters }) => {
  console.log(counter);
  return (
    <div className="counter">
      <div>
        {counter > 0 ? (
          <button
            className="minus"
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index]--;
              setCounters(newCounters);
            }}
          >
            <FontAwesomeIcon icon="minus" />
          </button>
        ) : null}

        <h2 className="result">{counter} </h2>
        {counter < 10 ? (
          <button
            className="plus"
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index]++;
              setCounters(newCounters);
            }}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        ) : null}
      </div>

      <button
        className="reset"
        onClick={() => {
          const newCounters = [...counters];
          newCounters[index] = 0;
          setCounters(newCounters);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
