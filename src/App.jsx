import Icon from './components/Icon/Icon'
import { useState } from 'react'
import { images } from "./data/imagesData"
import './App.css'


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

                {images.map((image, index) => {
                    return (
                        <li key={index}>
                            <Icon name={image.name} />
                            <code>Unicode - \{image.unicode}</code>
                            <span>Character - {image.unicodeChar}</span>
                            <input type="text" readOnly value={`icon-${image.name}`} />
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default App