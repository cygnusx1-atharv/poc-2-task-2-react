import { useEffect, useState } from 'react'
import axios from 'axios'
import Icon from './components/Icon/Icon'
import './App.css'

const App = () => {
    const [text, setText] = useState("")
    const [images, setImages] = useState([])
    const handleKeyPress = (e) => setText(e.target.value)

    const removeTrailingCommaJSON = (data) => {
        // Trailing Comma position
        const res = data.slice(0, data.length - 2) + data.slice(data.length - 1)
        return JSON.parse(res)
    }

    // Fetch data from server first thing
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("http://localhost:5000/uploads/data.js")
                
                // Remove training comma & convert into JSON
                setImages(removeTrailingCommaJSON(data))
            } catch (error) {
                console.log("Fetching Data Error: " + error)
            }
        }
        
        fetchData()
    }, [])

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

                {images?.map((image, index) => {
                    return (
                        <li key={index}>
                            <Icon name={image?.name} />
                            <code>Unicode - \{image?.unicode}</code>
                            <span>Character - {image?.unicodeChar}</span>
                            <input type="text" readOnly value={`icon-${image.name}`} />
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default App