
# FX Currency Converter
Now this web application simply helps you check the live foreign currency exchange rates for the following FX currencies:

- US Dollar (USD)
- Euro (EUR)
- British Pound (GBP)
- Canadian Dollar (CAD)
- Australian Dollar (AUD)
- Japanese Yen (JPY)
- Nigerian Naira (NGN)
- South African Rand (ZAR)
- Emirati Dirham (AED)

The live exchange rates are updated once a day at 00:00 UTC.

## Get Your API Key

Go to https://www.exchangerate-api.com/ to get a free api key to run the code.

## Insert API Key in Index.js File

Go to the **index.js** file and insert your API key from https://www.exchangerate-api.com/ in the string of the **apiKey** variable on line 14 of the **index.js** file and save.

```javascript
const apiKey = "";
```

## Installation

Install all FX Currency Converter packages (Express, Axios, EJS, Nodemon, & Body-Parser) with npm.

Run in the command line:

```bash
  npm i
```

Then run the next command to start your server:

```bash
  nodemon index.js
```

If successful, you would get the following message logged in your terminal (command line):

```bash
  [nodemon] 3.1.0
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,cjs,json
  [nodemon] starting `node index.js`
  Server is running on port 3000.
```

## Open Your Browser

Now visit http://localhost:3000/ on your browser and try out the FX Currency Converter application.