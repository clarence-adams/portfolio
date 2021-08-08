import './App.css';
import {React, useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faWrench} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faWrench)

// app
function App() {
  // array of objects that hold info needed to construct tile components
  const tiles = [
    {
      'id': 'small-business',
      'title': 'small business',
      'url': 'http://www.sloneheatingandair.com'
    },
    {
      'id': 'calculator',
      'title': 'calculator',
      'url': 'https://flamboyant-kalam-8ca516.netlify.app'
    },
    {
      'id': 'pomodoro-timer',
      'title': 'pomodoro timer',
      'url': 'https://suspicious-noether-2de41b.netlify.app'
    },
    {
      'id': 'drum-machine',
      'title': 'drum machine',
      'url': 'https://happy-curie-b68712.netlify.app'
    },
    {
      'id': 'random-quote-generator',
      'title': 'random quote generator',
      'url': 'https://clarence-de-coder.github.io/fcc-random-quote-machine'
    },
    {
      'id': 'markdown-previewer',
      'title': 'markdown previewer',
      'url': 'https://quizzical-volhard-f6d8e1.netlify.app'
    }
  ]

  return (
    <div id='app' className='App'>
      <header>
        <nav id='navbar'>
          <a class='navbar-button' href='#welcome-section'>About</a>
          <a class='navbar-button' href='#project-tiles'>Projects</a>
          <a class='navbar-button' id='github-link'
          href='https://github.com/clarence-de-coder' target='_blank'
          rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'github-square']} size='2x'/>
          </a>
          <a class='navbar-button' id='linkedin-link'
          href='https://www.linkedin.com/in/clarence-adams-b81b875a/'
          target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x'/>
          </a>
        </nav>
      </header>
      <main>
        <div id='welcome-section'>
          <h1 id='page-title'>Hi, I'm Clarence</h1>
          <p>This is my portfolio of projects</p>
          <p><i>currently under development but fully functional <FontAwesomeIcon icon='wrench'/></i></p>
        </div>
        <div id='project-tiles'>
          {tiles.map((element) =>
            <Tile id={element.id} title={element.title} url={element.url}/>
          )}
        </div>
      </main>
    </div>
  );
}

// project tile component
function Tile(props) {
  const [background, setBackground] = useState()

  function bufferToImageUrl(buffer) {
    // See https://gist.github.com/candycode/f18ae1767b2b0aba568e

    var arrayBufferView = new Uint8Array( buffer )
    var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } )
    var urlCreator = window.URL || window.webkitURL
    var imageUrl = urlCreator.createObjectURL( blob )

    return imageUrl
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({pageToScreenshot: props.url})
  }
  useEffect(() => {
    fetch("/.netlify/functions/take-screenshot", options)
    .then((res) => res.json())
    .then((res) => {
    if (!res.buffer) return document.getElementById(props.id).textContent = 'Error capturing screenshot'

      const img = document.createElement('img')
      img.src = bufferToImageUrl(res.buffer.data)
      setBackground(img.src)
    })
    .catch((err) => {
        console.log(err)
        document.getElementById(props.id).textContent = `Error: ${err.toString()}`
    })
  }, [])

  const clickHandler = () => {
    window.open(props.url, '_blank')
  }

  return (
    <div class='project-tile' onClick={clickHandler}>
      <div class='tile-header'>
        <h2>{props.title}</h2>
      </div>
      <div id={props.id} className='tile-screenshot' style={{backgroundImage: 'url(' + background + ')', backgroundSize: 'cover'}}/>
    </div>
  )
}

export default App;
