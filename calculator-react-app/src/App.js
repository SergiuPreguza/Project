import "./styles.css";

function App() {
  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="output">
          <div className="previous"></div>
          <div className="current"></div>
        </div>
        <button className="red-font">C</button>
        <button className="green-font">( )</button>
        <button className="green-font">%</button>
        <button className="green-font">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="green-font">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="green-font">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="green-font">+</button>
        <button>+/-</button>
        <button>0</button>
        <button>.</button>
        <button className="green-background">=</button>
      </div>
    </div>
  )
}

export default App;