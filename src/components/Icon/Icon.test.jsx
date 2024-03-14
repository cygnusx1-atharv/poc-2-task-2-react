import { render } from "@testing-library/react"
import '@testing-library/jest-dom';
import Icon from "./Icon"

describe('Icon component', () => {
    test("Should Render Icon Component", () => {
        const { container } = render(<Icon name="star" />);
        const iconElement = container.querySelector('i');
        expect(iconElement).toHaveClass('icon-star');
    })
})