import readline from 'readline';
import chalk from 'chalk';
const todos=[];
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const showMenu=()=>{
    console.log(chalk.blue('1.Add a task:'));
    console.log(chalk.green('2.View Tasks'));
    console.log(chalk.yellow('3.Exit'));
    rl.question('Enter an option:',handleInput);
}
const handleInput=(option)=>{
    if(option==='1'){
        rl.question('Enter a Task:',(task)=>{
            todos.push(task);
            showMenu();
        })
    }
    else if(option=='2'){
        console.log(chalk.green('Your Todo List'));
        todos.forEach((task,index)=>{
            console.log(chalk.green(`${index+1}: ${task}`));
            
        })
        showMenu();
        
    }
    else if(option===3){
        console.log(chalk.cyan('Good Bye'));
        rl.close();
    }
}
showMenu();
