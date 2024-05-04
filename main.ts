import inquirer from "inquirer";

import chalk from "chalk";

let computer_guess =Math.floor(Math.random()*10+1);


console.log(chalk.bgBlueBright.red("----------------------------------------Welcome to the Number Guessng Game-------------------------------"));

let username = await inquirer.prompt([
    {
     
        name:"user_name",
        type:"input",
        message:"Enter your name : ",
    },
    
]);

let conditions=async ()=>{

       if(isNaN(parseInt(username.user_name))){
          
        console.log(chalk.bgGreen.white(`Welcome to the Play ${username.user_name}`));

        let user_guess = await inquirer.prompt([
            
                {
                    name:"user_number",
                    type:"number",
                    message:"Enter the Number :"
                },
            
        ])


         if(user_guess.user_number === computer_guess){

            console.log(chalk.bgCyanBright.black(" Congrats You have Guessed the Right number"));
         }
         else{
   
             console.log(chalk.bgWhiteBright.red("Sorry , You have Guessed the wrong Number"));
             console.log(chalk.bgGreenBright.black(`The Right Number is ${computer_guess}`));

         }
       }
       else{

            console.log(chalk.bgYellow.whiteBright("You have Entered the wrong name. "));
       }
}



conditions()

