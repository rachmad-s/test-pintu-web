
# ReadMe

Frontend test (Web) by Rachmad Syaefullah 


## Tech Stack

**Language:** Typescript/Javascript

**Framework:** ReactJs

**Libraries:** 
- HTTP Request - `react-query`
- CSS - `Tailwindcss`
- Icons - `react-icons`
- Linter - `eslint` *(airbnb template)*
- Component showcase - `storybook`
- Automated Deployment - `gh-pages`
- Testing - `jest` `react-testing-library`



## Documentation

About the app, its basically replicated from https://pintu.co.id/market to show available Cryptocurrencies at Pintu

Its given two data from API:
- Supported Currencies

    `https://api.pintu.co.id/v2/wallet/supportedCurrencies`
- Price Changes

    `https://api.pintu.co.id/v2/trade/price-changes`

**Flow**

To reach the goal of displays those two data to the Market Page, I need to join those Arrays into single Array, and its connected by `currencySymbol` key. After the data joined, I saved it to state which is using `React Hooks` and store it to `Context` to be consumed by its Children components. While the data is saving into the state, I also put logic to get price comparison between each state and mark it as `'up'`, `'down'`, and `'equal'`. These marks will be used in the component to trigger CSS Animation color whether the price is going up or down from before price. 

**Feature Improvement / Additional Feature**

- Search query
  
  User is able to search cryptocurrency by name. Type the name to the `searchbox field`

- Sort Data

  
  In My Opinion, the page will be very useful if I add a Sorting feature by Currency name, price, or changes. So I add it to table header, which is clickable to sort the data whether the user want to sort by currency name, latest price, or price changes

## Run Locally

Clone the project

```bash
  git clone https://github.com/rahmatsya/test-pintu-web
```

Go to the project directory

```bash
  cd test-pintu-web
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Demo

The page has deployed to github-page. And because the API has been blocked by CORS Policy, I use https://cors-anywhere.herokuapp.com/ to bypass the CORS. Before go to the page you need to go to https://cors-anywhere.herokuapp.com/corsdemo and hit the `Request Temporary Access` button
***
Demo Link:

https://rahmatsya.github.io/test-pintu-web/


## Deployment

To deploy this project run

```bash
  npm run deploy
```

