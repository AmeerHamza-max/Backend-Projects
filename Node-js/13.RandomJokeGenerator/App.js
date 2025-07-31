const https = require('https');
const readline = require('readline');

// Create interface for command line input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to fetch a random joke from the API
function fetchJoke() {
    const apiURL = 'https://official-joke-api.appspot.com/random_joke';

    https.get(apiURL, (response) => {
        let data = '';

        // Gather data chunks from the response
        response.on('data', (chunk) => {
            data += chunk;
        });

        // When all data is received
        response.on('end', () => {
            try {
                const joke = JSON.parse(data);
                console.log('\nHere is your joke:\n');
                console.log(joke.setup);
                console.log(joke.punchline);
                showMenu(); // Prompt again
            } catch (error) {
                console.log('Error: Could not read the joke.');
                showMenu();
            }
        });

    }).on('error', (error) => {
        console.log('Error: Unable to fetch joke:', error.message);
        showMenu();
    });
}

// Function to display menu and handle user input
function showMenu() {
    rl.question('\nPress Enter to get a joke or type "exit" to quit: ', (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            console.log('Goodbye.');
            rl.close();
        } else {
            fetchJoke();
        }
    });
}

// Start the application
console.log('\nWelcome to the Random Joke Generator');
showMenu();
