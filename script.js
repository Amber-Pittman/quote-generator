//let apiQuotes = []; 

// Show Random New Quote
function newQuote() {
    // Pick random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get Quotes from API
//async function getQuotes() {
//    const apiUrl = 'https://type.fit/api/quotes'
//    try {
//        const response = await fetch (apiUrl);
//        apiQuotes = await response.json();
//        newQuote();
//    } catch (err) { 
//        // Catch Error Here
//        alert(err)
//    }
//}

// On Load
//getQuotes();
newQuote();