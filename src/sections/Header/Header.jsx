import React from 'react'

const Header = () => {
  return (
    <header className="App-header">
        <div>
            <a href="http://kodenow.vercel.app" target="_blank" rel="noopener noreferrer">
                <img src="/KodeNowLogo.png" alt="" width={"200"}/>
            </a>
            <p>
            Git this FREE react kit
        </p>
        <a
          className="App-link"
          href="https://github.com/kodenow/react-ui-kits/tree/smokey-gooey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
        </div>
    </header>
  )
}

export default Header