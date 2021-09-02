import ChatForm from "./ChatForm";
import { render, fireEvent } from "@testing-library/react";

const setupTest = (): {
  message: string;
  input: HTMLInputElement;
  button: HTMLButtonElement;
  onClick: jest.Mock;
} => {
  const message = "my message";
  const onClick = jest.fn();
  const utils = render(<ChatForm onClick={onClick} />);
  const input: HTMLInputElement = utils.getByLabelText(
    "message-input"
  ) as HTMLInputElement;
  const button: HTMLButtonElement = utils.getByLabelText(
    "submit-message"
  ) as HTMLButtonElement;

  return {
    onClick,
    message,
    input,
    button,
  };
};

describe("expectation tests", () => {
  it("should type to input", () => {
    const { input, message } = setupTest();

    fireEvent.change(input, { target: { value: message } });

    expect(input.value).toBe(message);
  });

  it("should type to input and submit by enter", () => {
    const { input, message, onClick } = setupTest();

    fireEvent.change(input, { target: { value: message } });
    expect(input.value).toBe(message);

    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });
    expect(input.value).toBe("");

    expect(onClick).toBeCalledTimes(1);
  });

  it("should type to input and submit button", () => {
    const { input, message, button, onClick } = setupTest();

    fireEvent.change(input, { target: { value: message } });
    expect(input.value).toBe(message);

    fireEvent.click(button);
    expect(input.value).toBe("");

    expect(onClick).toBeCalledTimes(1);
  });
});
