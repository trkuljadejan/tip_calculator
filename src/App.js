import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendsTip, setFriendsTip] = useState(0);

  function resetCalculator() {
    setBill(0);
    setMyTip(0);
    setFriendsTip(0);
  }

  return (
    <div className="App">
      <BillInput onBill={setBill} bill={bill} />
      <SelectPercentage text="My tip" onChange={setMyTip} value={myTip} />
      <SelectPercentage
        text="Friends tip"
        onChange={setFriendsTip}
        value={friendsTip}
      />
      {bill > 0 && (
        <>
          <Output bill={bill} myTip={myTip} friendsTip={friendsTip} />
          <Reset resetCalculator={resetCalculator} />
        </>
      )}
    </div>
  );
}

function BillInput({ onBill, bill }) {
  return (
    <div className="row">
      <p>How much was the bill?</p>
      <input
        type="text"
        onChange={(e) => onBill(Number(e.target.value))}
        value={bill}
      />
    </div>
  );
}

function SelectPercentage({ text, onChange, value }) {
  return (
    <div className="row">
      <p>{text}</p>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}

function Output({ bill, myTip, friendsTip }) {
  var avgTip = (myTip + friendsTip) / 2;

  const tip = (bill * avgTip) / 100;
  const total = bill + tip;

  return (
    <p>
      You pay ${total} (${bill} + ${tip} tip)
    </p>
  );
}

function Reset({ resetCalculator }) {
  return <button onClick={resetCalculator}>Reset</button>;
}
