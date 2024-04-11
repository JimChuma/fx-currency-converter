// Add event listener to select tag of Base Currency to change displayed
// currency symbol and flag when a new currency is selected.
document.getElementById("base-select").addEventListener("change", (event) => {
    const currencySymbol = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        CAD: "$",
        AUD: "$",
        JPY: "¥",
        NGN: "₦",
        ZAR: "R",
        AED: "د.إ",
    };

    const flag = {
        USD: "us",
        EUR: "eu",
        GBP: "gb",
        CAD: "ca",
        AUD: "au",
        JPY: "jp",
        NGN: "ng",
        ZAR: "za",
        AED: "ae",
    }
    document.querySelector("#amount-text span").textContent = currencySymbol[event.target.value];
    document.querySelector("#base-input img").src = "/images/flags/"+ flag[event.target.value] + ".svg";
});

// Add event listener to select tag of Target Currency to change displayed
// currency flag when a new currency is selected.
document.getElementById("target-select").addEventListener("change", (event) => {
    const flag = {
        USD: "us",
        EUR: "eu",
        GBP: "gb",
        CAD: "ca",
        AUD: "au",
        JPY: "jp",
        NGN: "ng",
        ZAR: "za",
        AED: "ae",
    }
    document.querySelector("#target-input img").src = "/images/flags/"+ flag[event.target.value] + ".svg";
});


// Add event listener to "switch icon" to interchange the selected base and
// target currency slots when icon is clicked
document.getElementById("switch-currency").addEventListener("click", () => {
    const currencySymbol = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        CAD: "$",
        AUD: "$",
        JPY: "¥",
        NGN: "₦",
        ZAR: "R",
        AED: "د.إ",
    };
    const flag = {
        USD: "us",
        EUR: "eu",
        GBP: "gb",
        CAD: "ca",
        AUD: "au",
        JPY: "jp",
        NGN: "ng",
        ZAR: "za",
        AED: "ae",
    }
    const baseCurrency = document.querySelector("#base-select").value;
    const targetCurrency = document.querySelector("#target-select").value;

    document.querySelector("#base-select").value = targetCurrency;
    document.querySelector("#target-select").value = baseCurrency;
    document.querySelector("#amount-text span").textContent = currencySymbol[targetCurrency];
    document.querySelector("#base-input img").src = "/images/flags/"+ flag[targetCurrency] + ".svg";
    document.querySelector("#target-input img").src = "/images/flags/"+ flag[baseCurrency] + ".svg";
});


// Add event listener to Amount input to parse in "," if inputted number > 1000
// eg. ($100, $1,000, $1,000,000)
document.querySelector("#amount-text input").addEventListener("change", (event) => {    
    let num = event.target.value;
    const numString = num.replace(/,/g, "");
    const options = { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
    }
    num = Number(numString).toLocaleString("en", options);
    if (isNaN(numString)) {
        document.querySelector("#amount-text p").textContent = "Please enter a valid amount";
    } else {
        event.target.value = num;
        document.querySelector("#amount-text p").textContent = "";
    }
});

// Add event listener to add border color when Amount input field
// is focused on
document.querySelector("#amount-text input").addEventListener("focusin", () => {
    document.querySelector("#amount-text").style.borderColor = "rgb(6, 118, 255)";
});

// Add event listener to remove border color when Amount input field
// is NOT focused on
document.querySelector("#amount-text input").addEventListener("focusout", () => {
    document.querySelector("#amount-text").style.borderColor = "";
});

// Add event listener to add border color when Base currency select
// is focused on
document.querySelector("#base-select").addEventListener("focusin", () => {
    document.querySelector("#base-input > div").style.borderColor = "rgb(6, 118, 255)";
});

// Add event listener to remove border color when Base currency select
// is NOT focused on
document.querySelector("#base-select").addEventListener("focusout", () => {
    document.querySelector("#base-input > div").style.borderColor = "";
});

// Add event listener to add border color when Target currency select
// is focused on
document.querySelector("#target-select").addEventListener("focusin", () => {
    document.querySelector("#target-input > div").style.borderColor = "rgb(6, 118, 255)";
});

// Add event listener to remove border color when Target currency select
// is NOT focused on
document.querySelector("#target-select").addEventListener("focusout", () => {
    document.querySelector("#target-input > div").style.borderColor = "";
});

// Add event listener to set the min height of the div element with
// id "frame" when the browser loads. Created a chain of if statements
// for different conditions based on the range of the size of the 
// user's screen and if data has been received from the server and 
// passed to the client side.
window.addEventListener("load", () => {
    const ejsReceived = document.getElementById("info");
    if (!ejsReceived && screen.width < 1350 && screen.width >= 1100) {
        document.querySelector("#frame").style.minHeight = "100dvh";
    } else if (ejsReceived && screen.width < 1350 && screen.width >= 1100) {
        document.querySelector("#frame").style.minHeight = "910px";
    } else if (!ejsReceived && screen.width < 1100 && screen.width >= 640) {
        document.querySelector("#frame").style.minHeight = "960px";
    } else if (ejsReceived && screen.width < 1100 && screen.width >= 640) {
        document.querySelector("#frame").style.minHeight = "1120px";
    } else if (!ejsReceived && screen.width < 640 && screen.width >= 0) {
        document.querySelector("#frame").style.minHeight = "940px";
    } else if (ejsReceived && screen.width < 640 && screen.width >= 0) {
        document.querySelector("#frame").style.minHeight = "1240px";
    }
});