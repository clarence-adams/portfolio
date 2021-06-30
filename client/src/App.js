import './App.css';
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faWrench} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

library.add(fab, faWrench)
// app
function App() {
  const [port, setPort] = useState(undefined)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setPort(data.port.toString()));
  }, []);

  // array of objects that hold info needed to construct tile components
  const tiles = [
    {
      "id": "small-business",
      "title": "small business",
      "url": "http://www.sloneheatingandair.com",
      "image": "sloneheatingandair.com"
    },
    {
      "id": "calculator",
      "title": "calculator",
      "url": "https://flamboyant-kalam-8ca516.netlify.app",
      "image": "flamboyant-kalam-8ca516.netlify.app"
    },
    {
      "id": "pomodoro-timer",
      "title": "pomodoro timer",
      "url": "https://suspicious-noether-2de41b.netlify.app"
    },
    {
      "id": "drum-machine",
      "title": "drum machine",
      "url": "https://happy-curie-b68712.netlify.app"
    },
    {
      "id": "random-quote-generator",
      "title": "random quote generator",
      "url": "https://clarence-de-coder.github.io/fcc-random-quote-machine"
    },
    {
      "id": "markdown-previewer",
      "title": "markdown previewer",
      "url": "https://quizzical-volhard-f6d8e1.netlify.app"
    }
  ]

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <a class="navbar-button" href="#welcome-section">About</a>
          <a class="navbar-button" href="#project-tiles">Projects</a>
          <a class="navbar-button" id="github-link"
          href="https://github.com/clarence-de-coder" target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x"/>
          </a>
          <a class="navbar-button" id="linkedin-link"
          href="https://www.linkedin.com/in/clarence-adams-b81b875a/"
          target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>
          </a>
        </nav>
      </header>
      <main>
        <div id="welcome-section">
          <h1 id="page-title">Hi, I'm Clarence</h1>
          <p>This is my portfolio of projects</p>
          <p><i>currently under development but fully functional <FontAwesomeIcon icon="wrench"/></i></p>
        </div>
        <div id="project-tiles">
          {tiles.map((element, index) =>
            <Tile id={element.id} title={element.title} url={element.url} image={element.image} port={port}/>
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

  const backgroundImage = 'http://localhost:' + props.port + '/' + props.image + '.png'

  return (
    <div id={props.id} class="project-tile" onClick={clickHandler}>
      <header class="tile-header">
        <h2>{props.title}</h2>
      </header>
      <div class="tile-screenshot" style={{backgroundImage: "url(" + backgroundImage + ")"}}/>
    </div>
  )
}

export default App;
