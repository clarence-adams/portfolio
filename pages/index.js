import Head from 'next/head'
import Image from 'next/image'
import profilePicture from '../public/profile.jpg'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faSpinner, faExclamationTriangle, faCode} from '@fortawesome/free-solid-svg-icons'
// array containing info for project tiles
const projects = require('../projects.json')

library.add(fab, faSpinner, faExclamationTriangle, faCode)

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState('')
  const [inputDisabled, setInputDisabled] = useState(false)

  const nameOnInput = event => setName(event.target.value)
  const emailOnInput = event => setEmail(event.target.value)
  const messageOnInput = event => setMessage(event.target.value)

  const sendMessage = async () => {
    if (name === '' || email === '' || message === '') {
      return setMessageSent('blank forms')
    }

    setInputDisabled(true)

    const data = {name, email, message}
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    fetch('.netlify/functions/send-message', options)
    .then(res => res.json())
    .then(res => {
      res.message !== 'success' ? setMessageSent('failed to send') : setMessageSent('sent')
      setInputDisabled(true)
    })
    .catch(err => setMessageSent('failed to send'))
  }

  const ContactFormActions = (props) => {
    switch(props.messageSent) {
      case 'sent':
        return <div id='contact-alert-success'>Message sent!</div>
      case 'failed to send':
        return <div id='contact-alert-error'>Message failed to send. Try again later.</div>
      case 'blank forms':
        return (
          <>
            <div id='contact-alert-error'>Please fill out all forms.</div>
            <button id='contact-form-button' type='button' onClick={sendMessage}>Send Message</button>
          </>
        )
      default:
        return <button id='contact-form-button' type='button' onClick={sendMessage} disabled={inputDisabled}>Send Message</button>
    }
  }

  return (
    <div id='app' className='App'>
      <header>
        <nav id='navbar'>
          <a className='navbar-button' href='#welcome-section'>About</a>
          <a className='navbar-button' href='#project-tiles'>Projects</a>
          <a className='navbar-button' href='#contact'>Contact</a>
          <a className='navbar-button' id='github-link'
          href='https://github.com/clarence-de-coder' target='_blank'
          rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'github-square']} size='2x'/>
          </a>
          <a className='navbar-button' id='linkedin-link'
          href='https://www.linkedin.com/in/clarence-adams-b81b875a/'
          target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x'/>
          </a>
        </nav>
      </header>
      <main>
        <div id='welcome-section'>
          <div id='profile-picture-wrapper'>
            <Image id='profile-picture' src={profilePicture} alt={'Clarence\'s face'}/>
          </div>
          <h1 id='page-title'>Hi, I'm <span className='blue'>Clarence</span></h1>
          <p>A full-stack web developer</p>
          <FontAwesomeIcon icon={'code'} className='blue' size='2x'/>
        </div>
        <div id='project-tiles'>
          {projects.map((element, index) =>
            <Tile id={element.id} title={element.title} url={element.url} key={index}/>
          )}
        </div>
        <div id='contact'>
          <div className='form-wrapper'>
            <form id='registration-form'>
              <div className='form-group'>
                <h2 id='contact-header'>Contact Me</h2>
                <div className='first-form-element'>
                  <div className='form-label-wrapper'>
                    <label htmlFor='name'>Name<span className='red-asterisk'> *</span></label>
                  </div>
                  <input name='name' id='name' className='contact-input' onInput={nameOnInput} disabled={inputDisabled} type='text' maxLength='100' required={true}/>
                </div>
                <div className='form-element'>
                  <div className='form-label-wrapper'>
                    <label htmlFor='email'>Email<span className='red-asterisk'> *</span></label>
                  </div>
                  <input name='email' id='email' onInput={emailOnInput} disabled={inputDisabled} type='email' maxLength='100' required={true}/>
                </div>
                <div className='last-form-element'>
                  <div className='form-label-wrapper'>
                    <label htmlFor='message'>Message<span className='red-asterisk'> *</span></label>
                  </div>
                  <textarea name='message' id='message' onInput={messageOnInput} disabled={inputDisabled} type='text' maxLength='250' required={true}/>
                </div>
                <div className='primary-form-actions'>
                  <ContactFormActions messageSent={messageSent}/>
                </div>
              </div>
            </form>
          </div>
        <footer>
          <p>Coded by Clarence using React and Netlify</p>
        </footer>
        </div>
      </main>
    </div>
  );
}

// project tile component
const Tile = (props) => {
  const [background, setBackground] = useState()
  const [fetchStatus, setFetchStatus] = useState('loading')
  const [text, setText] = useState('Fetching live screenshot...')

  function bufferToImageUrl(buffer) {
    // See https://gist.github.com/candycode/f18ae1767b2b0aba568e

    var arrayBufferView = new Uint8Array( buffer )
    var blob = new Blob( [ arrayBufferView ], { type: 'image/jpeg' } )
    var urlCreator = window.URL || window.webkitURL
    var imageUrl = urlCreator.createObjectURL( blob )

    return imageUrl
  }

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({pageToScreenshot: props.url})
  }

  useEffect(() => {
    fetch('.netlify/functions/take-screenshot/', options)
    .then((res) => res.json())
    .then((res) => {
      if (!res.buffer) {
        setText('Error capturing live screenshot')
        setFetchStatus('error')
      } else {
        const img = document.createElement('img')
        img.src = bufferToImageUrl(res.buffer.data)
        setBackground(img.src)
        setText('')
        setFetchStatus('loaded')
      }
    })
    .catch((err) => {
        setText('Error fetching live screenshot')
        setFetchStatus('error')
    })
  // eslint-disable-next-line
  }, [])

  const clickHandler = () => {
    window.open(props.url, '_blank')
  }

  const TileContent = () => {
    switch(fetchStatus) {
      case 'loaded':
        return <></>
      case 'error':
        return <><FontAwesomeIcon icon={'exclamation-triangle'} size='2x'/><p>{text}</p></>
      default:
        return <FontAwesomeIcon className='loading-spinner' icon={'spinner'} size='2x'/>
    } 
  }

  return (
    <div className='project-tile' onClick={clickHandler}>
      <div className='tile-header'>
        <h2>{props.title}</h2>
      </div>
      <div id={props.id} className='tile-screenshot' style={{backgroundImage: 'url(' + background + ')', backgroundSize: 'cover'}}>
        <TileContent/>
      </div>
    </div>
  )
}