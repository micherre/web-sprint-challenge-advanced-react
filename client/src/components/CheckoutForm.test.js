import React from "react";
import { render, getByLabelText, fireEvent, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />)
  const header = getByText(/checkout form/i)
  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  const { getByTestId, getByText } = render(<CheckoutForm />)

  const firstName = getByTestId("firstName")
  fireEvent.change(firstName, {target: {value: "Micherre"}})
  expect(firstName).toHaveValue("Micherre")
  
  const lastName = getByTestId("lastName")
  fireEvent.change(lastName, {target: {value: "Fox"}})
  expect(lastName).toHaveValue("Fox")

  const address = getByTestId("address")
  fireEvent.change(address, {target: {value: "3002 39th Ave"}})
  expect(address).toHaveValue("3002 39th Ave")

  const city = getByTestId("city")
  fireEvent.change(city, {target: {value: "Long Island City"}})
  expect(city).toHaveValue("Long Island City")

  const state = getByTestId("state")
  fireEvent.change(state, {target: {value: "New York"}})
  expect(state).toHaveValue("New York")

  const zip = getByTestId("zip")
  fireEvent.change(zip, {target: {value: "11101"}})
  expect(zip).toHaveValue("11101")

  const btn = getByText("Checkout")
  fireEvent.click(btn)
  expect(getByText(/You have ordered some plants/i))
});
