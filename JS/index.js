// script.js
window.onload = function() {
    // Create a new Date object
    let today = new Date();

    // Get the current date components
    let date = today.getDate();
    let month = today.getMonth() + 1; // Months are zero-based
    let year = today.getFullYear();

    // Display the date in the console for demonstration
    console.log(`Today's date: ${month}/${date}/${year}`);

    // You can also update an HTML element with the date
    document.getElementById("dateDisplay").innerText = `${month}/${date}/${year}`;
};
