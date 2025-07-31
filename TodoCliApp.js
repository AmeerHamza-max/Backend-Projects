// TodoCliApp.js
import readline from 'readline';
import chalk from 'chalk';

const todos = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const showMenu = () => {
    console.log(chalk.blue.bold('\n=== Todo CLI App ==='));
    console.log(chalk.green('1. Add a Task'));
    console.log(chalk.yellow('2. View Tasks'));
    console.log(chalk.red('3. Exit'));
    rl.question(chalk.cyan('\nChoose an option: '), handleInput);
};

const handleInput = (option) => {
    if (option === '1') {
        rl.question(chalk.cyan('Enter a Task: '), (task) => {
            todos.push(task);
            console.log(chalk.green('Task Added:'), chalk.white(task));
            showMenu();
        });
    } else if (option === '2') {
        if (todos.length === 0) {
            console.log(chalk.yellow('\n Your todo list is empty.'));
        } else {
            console.log(chalk.magenta('\n Your Todo List:'));
            todos.forEach((task, index) => {
                console.log(`${chalk.blue(index + 1)}. ${chalk.white(task)}`);
            });
        }
        showMenu();
    } else if (option === '3') {
        console.log(chalk.red('\n👋 Good Bye!'));
        rl.close();
    } else {
        console.log(chalk.red('Invalid Choice! Please try again.'));
        showMenu();
    }
};

showMenu();
