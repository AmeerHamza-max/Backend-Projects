import fetch from 'node-fetch';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fetchJoke() {
    const apiURL = 'https://official-joke-api.appspot.com/random_joke';

    try {
        const res = await fetch(apiURL);
        const joke = await res.json();
        console.log('\n😂 Here is your joke:\n');
        console.log(joke.setup);
        console.log(joke.punchline);
    } catch (error) {
        console.log('❌ Error: Could not fetch joke:', error.message);
    } finally {
        showMenu();
    }
}

function showMenu() {
    rl.question('\nPress Enter to get a joke or type "exit" to quit: ', (input) => {
        if (input.trim().toLowerCase() === 'exit') {
            console.log('\n👋 Goodbye!\n');
            rl.close();
        } else {
            fetchJoke();
        }
    });
}

console.log('🎉 Welcome to the Random Joke Generator 🎉');
showMenu();
