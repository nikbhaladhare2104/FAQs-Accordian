import { useState } from "react";
import constants from "./constants";

function App() {
  const [idx, setIdx] = useState(null);
  return (
    <main>
      <div className="container">
        <div className="heading">
          <img src="/icon-star.svg" alt="star Icon" className="star-img" />
          <p className="heading-title ">FAQs</p>
        </div>
        {constants.map((item) => (
          <div
            className="question"
            key={item.id}
            onClick={() => setIdx(idx === item.id ? null : item.id)}
          >
            <div className="question-title">
              <p style={{ fontWeight: "700", maxWidth: "90%" }} className="que">
                {item.que}
              </p>
              {idx === item.id ? (
                <img
                  src="/icon-minus.svg"
                  alt="arrow Icon"
                  className="arrow-img"
                  onClick={() => setIdx(null)}
                />
              ) : (
                <img
                  src="/icon-plus.svg"
                  alt="arrow Icon"
                  className="arrow-img"
                  onClick={() => setIdx(item.id)}
                />
              )}
            </div>
            <div className="question-ans">
              {idx === item.id && <p>{item.ans}</p>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
