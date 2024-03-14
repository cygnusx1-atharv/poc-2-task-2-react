import React from "react"
import { createRoot } from "react-dom/client"
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import { act } from "react-dom/test-utils";

describe('App rendering', () => {
    test('renders App component into the root element', () => {
        // Create a root element dynamically
        const rootElement = document.createElement('div')
        rootElement.id = 'root'
        document.body.appendChild(rootElement)
    
        act(() => {
            // Render the App component into the root element
            const root = createRoot(rootElement)
            root.render(<App />)
        })
    
        // Check if the App component is present in the DOM
        const { container } = render(<App />)
        const wrapperContainer = container.querySelector('.wrap')
        expect(wrapperContainer).toBeInTheDocument()
    
        // Clean up
        document.body.removeChild(rootElement)
    })
})