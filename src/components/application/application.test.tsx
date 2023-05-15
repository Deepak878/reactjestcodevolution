import { Application } from "./application";
import { getByDisplayValue, render, screen } from "@testing-library/react";
describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument();
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();
    const nameElement4 = screen.getByDisplayValue("Bishwas");
    expect(nameElement4).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
