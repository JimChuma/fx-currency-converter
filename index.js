// Import NPM Packages
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


// Create server using express
// Declare port for server to listen on
const app = express();
const port = 3000;

// Insert your API Key Here to get application to work  ***************** IMPORTANT!
// Get your API Key from https://www.exchangerate-api.com/  ***************** IMPORTANT!
const apiKey = "";



// Ensure to insert your API Key above, if not the application won't work ^_^



// Specify directory for serving static files to express
app.use(express.static("public"));

// Use Body-Parser middleware to receive inputs as objects from the client-side submitted form
app.use(bodyParser.urlencoded( {extended: true} ));

// Homepage Get Route
app.get("/", (req, res) => {
    res.render("index.ejs");
});


// "/convert" Post Route
app.post("/convert", async (req, res) => {
    
    // Perform error-handling with try-catch statement
    try {

        // Use to set the amount number to have two decimals
        const options = { 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 
        }
        
        
        // Remove all "," in the amount number received
        const bodyAmount = req.body.amount.replace(/,/g, "");
        
        
        // Use Axios to get API of https://www.exchangerate-api.com/
        const result = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${req.body.base}/${req.body.target}/${bodyAmount}`);
        
        
        // Retrieve API Data of conversion rate of base and target currency
        const convBase = result.data["conversion_rate"];
        const convTarget = (1 / result.data["conversion_rate"]).toFixed(4);

        
        // Declare variable to store API data and other important data that will be passed back to the client-side on rendering
        // Base - refers to Base currency
        // Target - refers to Target currency (currency you want to compare with the base currency)
        // Amount - refers to the amount of the base currency (eg. $100, £10) you will like to convert to target currency
        // Use currency object to display currency name in words when rendered
        // Use flag object to display currency flag when rendered
        // Use Symbol object to display currency symbol when rendered
        // Use ternary operators to parse in "," into the Amount if the Amount is up to 1000 (eg. $100, $1,000)
        const data = {
            result: Number(result.data["conversion_result"]).toLocaleString("en", options),
            baseRate: Number(convBase) >= 1000 ? Number(convBase).toLocaleString("en") : convBase,
            targetRate: Number(convTarget) >= 1000 ? Number(convTarget).toLocaleString("en") : convTarget,
            amount: req.body.amount,
            numAmount: bodyAmount,
            base: req.body.base,
            target: req.body.target,
            lastUpdate: new Date(result.data["time_last_update_unix"] * 1000),
            nextUpdate: new Date(result.data["time_next_update_unix"] * 1000),
            currency: {
                USD: "US Dollar",
                EUR: "Euro",
                GBP: "British Pound",
                CAD: "Canadian Dollar",
                AUD: "Australian Dollar",
                JPY: "Japanese Yen",
                NGN: "Nigerian Naira",
                ZAR: "South African Rand",
                AED: "Emirati Dirham",
            },
            flag: {
                USD: "us",
                EUR: "eu",
                GBP: "gb",
                CAD: "ca",
                AUD: "au",
                JPY: "jp",
                NGN: "ng",
                ZAR: "za",
                AED: "ae",
            },
            symbol: {
                USD: "$",
                EUR: "€",
                GBP: "£",
                CAD: "$",
                AUD: "$",
                JPY: "¥",
                NGN: "₦",
                ZAR: "R",
                AED: "د.إ",
            }
        };

        
        // Render "index.ejs" with received data from API
        res.render("index.ejs", {content: data});
    } catch (error) {
        
        // If try block fails, then run error message
        res.send("Failed to make request: " + error.message);
    }
});

// Start server to listen on this port
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});