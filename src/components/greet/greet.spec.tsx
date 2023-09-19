import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe("<Greet />", () => {
    it("should render correctly", () => {
        render(<Greet />)
        const textElement = screen.getByText(/greet/i)
        expect(textElement).toBeInTheDocument()
    })

})