import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(1);
  const [qtr, setQtr] = useState(1);
  const [ballOn, setBallOn] = useState(21);
  const [toGo, setToGo] = useState(7);


  return (
    <div>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{down}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{toGo}</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{ballOn}</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{qtr}</div>
        </div>

      </div>

      <div className="trackerButtons">
          <button className="homeButtons__touchdown" onClick = {() => setDown(down + 1) }>Adv. Down</button>
          <button className="homeButtons__touchdown" onClick = {() => setDown(1) }>Reset Downs</button>
          <button className="homeButtons__touchdown" onClick = {() => setDown(down - 1) }>Repeat Down</button>
          <button className="homeButtons__touchdown" onClick = {() => setToGo(toGo - 5) }>Yards Gained</button>
          <button className="homeButtons__touchdown" onClick = {() => setToGo(10) }>First Down</button>
          <button className="homeButtons__touchdown" onClick = {() => setBallOn(ballOn + 5) }>Yards Gained</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setQtr(qtr + 1)}>Next Quater</button>
        </div>
    </div>
      
  );
};

export default BottomRow;
