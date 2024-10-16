import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="image">
          <img src={props.image} alt='Not found'/>
        </div>
        <div className="Detail">
          <h2>{props.header}</h2>
          <p className="pretext">{props.text}</p>
          <h3 className="h3">{props.info}</h3>
          <a href="" className="button">Follow</a>
          <div>564</div>
        </div>
      </div>
    </div>
  );
}

export default App;
