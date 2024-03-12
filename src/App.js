import Icon from './components/Icon/Icon'
import './App.css'
import { useState } from 'react'

const images = [
    "airport",
    "bicycle",
    "dog-park",
    "ferry",
    "park",
    "restaurant",
    "rocket",
    "toilets",
    "zoo"
]

const App = () => {
    const [text, setText] = useState("")
    const handleKeyPress = (e) => setText(e.target.value)

    return (
        <div className="wrap">
            <h1 className="heading">atharv-font</h1>
            <div className="input-group">
                <input 
                    className="input" 
                    placeholder="Enter Text" 
                    type="text" 
                    value={text}
                    onChange={(e) => handleKeyPress(e)} 
                />
                <p className="input-text">{text}</p>
            </div>
            <ul className="glyphs-list">

                {images.map((iconName, index) => {
                    return (
                        <li key={index}>
                            <Icon name={iconName} />
                            <code>Unicode - \{61 + index}</code>
                            <span>Character - {String.fromCharCode(97 + index)}</span>
                            <input type="text" readOnly value={`svg-icon-${iconName}`} />
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default App