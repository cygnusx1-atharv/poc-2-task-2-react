import { render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom';
import App from "./App"

describe('App component', () => {
    test("Should Render App Container", () => {
        const { container } = render(<App />)
        const wrapperContainer = container.querySelector('.wrap')
        
        expect(wrapperContainer).toBeInTheDocument()
    })

    test("Should Render Input Field", () => {
        const { container } = render(<App />)
        const inputField = container.querySelector('.input')
        
        expect(inputField).toBeInTheDocument()

    })

    test("Should Display Rendered Text", () => {
        const { container } = render(<App />)
        const inputField = container.querySelector('.input')
        const displayText = container.querySelector('.input-text')
        
        expect(inputField).toBeInTheDocument()
        fireEvent.change(inputField, { target: { value: 'Test Text' } })
        expect(displayText).toHaveTextContent('Test Text');
    })
})