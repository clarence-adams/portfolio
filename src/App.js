import './App.css';
// app
function App() {
  // array of objects that hold info needed to construct tile components
  const tiles = [
    {
      "id": "calculator",
      "title": "calculator",
      "url": "https://flamboyant-kalam-8ca516.netlify.app/"
    },
    {
      "id": "pomodoro-timer",
      "title": "pomodoro timer",
      "url": "https://suspicious-noether-2de41b.netlify.app/"
    },
    {
      "id": "drum-machine",
      "title": "drum machine",
      "url": "https://happy-curie-b68712.netlify.app/"
    },
    {
      "id": "random-quote-generator",
      "title": "random quote generator",
      "url": "https://clarence-de-coder.github.io/fcc-random-quote-machine/"
    },
    {
      "id": "markdown-previewer",
      "title": "markdown previewer",
      "url": "https://quizzical-volhard-f6d8e1.netlify.app/"
    }
  ]

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <a href="#project-tiles">Projects</a><br/>
          <a href="https://github.com/clarence-de-coder" id="profile-link" target="_blank" rel="noreferrer">Git-Hub Profile</a>
        </nav>
      </header>
      <main>
        <div id="welcome-section">
          <h1 id="page-title">Hi, I'm Clarence</h1>
          <p>This is my portfolio of projects</p>
          <i>(currently under development but funcitonal)</i>
        </div>
        <div id="project-tiles">
          {tiles.map((element, index) =>
            <Tile id={element.id} title={element.title} url={element.url}/>
          )}
        </div>
      </main>
    </div>
  );
}
// project tile component
function Tile(props) {
  const clickHandler = () => {
    window.open(props.url, "_blank")
  }
  return (
    <div id={props.id} class="project-tile" onClick={clickHandler}>
      <header class="tile-header">
        <h2>{props.title}</h2>
      </header>
    </div>
  )
}

export default App;
