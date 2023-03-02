import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import App from "../App";
import { getCurrenciesRes, API, getPriceChangesRes } from "./mocks/response";
afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});

it("should loading the table", () => {
  render(<App />);

  const table = screen.getByTestId("table-currency");
  expect(table).toHaveClass("loading-skeleton");
});

it("should load data from API", () => {
  render(<App />);

  jest
    .spyOn(API, "getCurrencies")
    .mockImplementation(() => Promise.resolve(getCurrenciesRes));

  jest
    .spyOn(API, "getPriceChanges")
    .mockImplementation(() => Promise.resolve(getPriceChangesRes));
});
