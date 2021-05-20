import './App.css';

function App() {

  const title = " Welcome to Senegal"
  const like = " 50"
  const link= "http://www.google.com"
  return (
    <div className="App">
      <div className="div content">
        <h1>{title}</h1>
        <p>liked it {like} times</p>
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        <p>{Math.random() * 10 }</p>

        <a href= {link}> Link to google</a>
      </div>

    </div>
  );
}

export default App;
