import { render, screen } from "@testing-library/react"
import { server } from "../../mocks/server"
import { rest } from 'msw'
import { Users } from "./users"

describe('<Users />', () => {
    it('should render correctly', () => {
        render(<Users />)
        const textElement = screen.getByText('Users')
        expect(textElement).toBeInTheDocument()
    })

    it('should render a list of users', async () => {
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(3)
    })

    it('should renders the error message', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users',
                (req, res, ctx) => {
                    return res(ctx.status(500))
                }
            )
        )
        render(<Users />)
        const error = await screen.findByText('Error fetching users')
        expect(error).toBeInTheDocument()
    })
})