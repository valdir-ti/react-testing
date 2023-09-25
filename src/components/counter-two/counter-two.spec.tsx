import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./counter-two";

describe("<CounterTwo />", () => {

  it("should render correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument()
  });

  it('should call handlers', async () => {

    userEvent.setup()
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(<CounterTwo count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    await userEvent.click(incrementButton)
    await userEvent.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })

});
