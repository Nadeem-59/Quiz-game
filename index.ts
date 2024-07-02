//The app will show the students multiple choice questions and promt the user to reply. 
//In the end it will show the students the result of the quiz.

//Create a GitHub repository for the project and submit its URL in the project submission form.


//#! /usr/bin/env node 

//Import inquirer & chalk
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
console.log(chalk.green.bold(figlet.textSync("Quiz")));


//--------------------------Difficult-----Questions---------------------------------------------------------------------------------------------------
let Q1:string = "Question-1 which animal can see even with its closed eyes?"
let Q2:string = "Question-2  In which country does the sun rise at night 12 0'clock ?"
let Q3:string = "Question-3 Which gas keeps water cool in fridge?"
let Q4:string = "Question-4 How do you specify that a function does not return anything in TypeScript?"
let Q5:string = "Question-5 Which country has no temple?"

//--------------------------Easy-----Questions---------------------------------------------------------------------------------------------------
let Q6:string  = "Question-1 How much does smoking one cigarette shorten a person's life?"
let Q7:string  = "Question-2Which animal sleeps with one eye open?"
let Q8:string  = "Question-3 Which keyword is used to define a function in TypeScript?"
let Q9:string  = "Question-4 Which human organ continues to grow after death?"
let Q10:string = "Question-5 Which symbol is used to declare the type of a variable in TypeScript?"


let CorrectAnswers:number = 0;
let incorrectAnswers:number = 0;



let getPlayerName = await inquirer.prompt([{
    name: "playerName",
    type: "input",
    message: chalk.blueBright("Enter your Name: ")
}])

let playerName:string = getPlayerName.playerName;


let Quiz:{

gamemode: string
} = await inquirer.prompt([{
    name: "gamemode",
    type: "list",
    message: chalk.blueBright("Choose a Game Mode"),
    choices: ["Difficult","Easy"]
}])


switch (Quiz.gamemode) {
    case "Difficult":
    //-------------------------Difficult Quiz Code--------------------------------------------------------------------
let DifficultQuiz:{

question1: string;
question2: string;
question3: string;
question4: string;
question5: string;

} = await inquirer.prompt([{
    name: "question1",
    type: "list",
    message: chalk.yellow("1. Which animal can see even with its closed eyes?"),
    choices: ["A.Rabbit","B.Cat","C.Camel","D.Bear"], // ans c
    },

    { name: "question2",
      type: "list",
      message: chalk.blueBright("2.  In which country does the sun rise at night 12 o'clock?"),  // ans c
      choices: ["A.Denmark","B.Finland","C.Norway","D.Sweden"],
    },

    { name: "question3",
      type: "list",
      message: chalk.yellow("3. Which gas keeps water cool in fridge?"), // ans a
      choices: ["A.ammonia","B.oxygen","C.nitrogen","D.carbondioxide"],
    },

    { name: "question4",
      type: "list",
      message: chalk.blueBright("4. How do you specify that a function does not return anything in TypeScript?"),
      choices: ["A.function myFunc(): undefined","B.function myFunc(): void" ,"C.function myFunc(): null","D.function myFunc(): None"],// ans b
    },

    { name: "question5",
      type: "list",
      message: chalk.yellow("5.Which country has no temple?"),
      choices: ["A.Saudia Arabia","B.Australia","C.Canada","D.South Africa"],     //ans a

    }])

    //-------------------------Difficult Quiz Code--------------------------------------------------------------------

//------question 1 answer check--------//

console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);


if(DifficultQuiz.question1 === "C.Camel"){
    console.log(chalk.yellow.bold(` ${Q1} \n\n`)+ chalk.green(`   Answer is Correct :  ${DifficultQuiz.question1}\n`));
    CorrectAnswers++
    console.log(chalk.magentaBright.bold("-------------------------------"));
}else{
    console.log(chalk.red.bold(` ${Q1} \n\n  Answer is inCorrect :`)  +  chalk.green(` inCorrect Answer is :A:Camel \n`));
    incorrectAnswers ++
    console.log(chalk.magentaBright.bold("-------------------------------"));
}  


//------question 2 answer check--------//

if(DifficultQuiz.question2 === "C.Norway"){
    console.log(chalk.yellow.bold(` ${Q2} \n\n`)+ chalk.green(`   Answer is Correct :  ${DifficultQuiz.question2}\n`));
    CorrectAnswers++
    console.log(chalk.magentaBright.bold("-------------------------------"));
}else{
    console.log(chalk.red.bold(` ${Q2} \n\n  Answer is inCorrect :`)  +  chalk.green(` inCorrect Answer is :C:Norway \n`));
    incorrectAnswers ++
    console.log(chalk.magentaBright.bold("-------------------------------"));
} 

//------question 3 answer check--------//  
    
if(DifficultQuiz.question3 === "A.ammonia"){
    console.log(chalk.yellow.bold(` ${Q3} \n\n`)+ chalk.green(`   Answer is correct :  ${DifficultQuiz.question3}\n`));
    CorrectAnswers++
    console.log(chalk.magentaBright.bold("-------------------------------"));
}else{
    console.log(chalk.red.bold(` ${Q3} \n\n  Answer is inCorrect :`)  +  chalk.green(` inCorrect Answer is :A:ammonia \n`));
    incorrectAnswers ++
    console.log(chalk.magentaBright.bold("-------------------------------"));
} 

//------question 4 answer check--------//  


if(DifficultQuiz.question4 === "B.function myFunc(): void"){
    console.log(chalk.yellow.bold(` ${Q4} \n\n`)+ chalk.green(`   Answer is Correct :  ${DifficultQuiz.question4}\n`));
    CorrectAnswers++
    console.log(chalk.magentaBright.bold("-------------------------------"));
}else{
    console.log(chalk.red.bold(` ${Q4} \n\n  Answer is Incorrect :`)  +  chalk.green(` inCorrect Answer is :B:function myFunc(): void\n`));
    incorrectAnswers ++
    console.log(chalk.magentaBright.bold("-------------------------------"));
} 

//------question 5 answer check--------//  

if(DifficultQuiz.question5 === "A.Saudia Arabia"){
    console.log(chalk.yellow.bold(` ${Q5} \n\n`)+ chalk.green(`   Answer is Correct :  ${DifficultQuiz.question5}\n`));
    CorrectAnswers++
    console.log(chalk.magentaBright.bold("-------------------------------"));
}else{
    console.log(chalk.red.bold(` ${Q5} \n\n  Answer is Incorrect :`)  +  chalk.green(` inCorrect Answer is :A:Saudia Arabia\n`));
    incorrectAnswers ++
    console.log(chalk.magentaBright.bold("-------------------------------"));
} 

console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
console.log(`\n ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);

  
/////Score Board////


console.log(chalk.magentaBright.bold("-------------------------------"));

console.log(chalk.green.bold("⭐-Correct Answer :"),CorrectAnswers);
console.log(chalk.red.bold("⭐-Incorrect Answer :"),incorrectAnswers,"\n");
console.log(chalk.magentaBright.bold(`Hello! ${playerName}  (Your scored : 0${CorrectAnswers} )`));

console.log(chalk.magentaBright.bold("-------------------------------"));

    break
//------------------Difficult Mode Code Ended---------------------------------------------------------

    case "Easy":
    //-------------------------Easy Quiz Code--------------------------------------------------------------------
    let easyQuiz:{

        question6:string;
        question7:string;
        question8:string;
        question9:string;
        question10:string;
        
        } = await inquirer.prompt([{
            name: "question6",
            type: "list",
            message: chalk.blueBright(Q6),
            choices: ["A)5 min","B)2 min","C)11 min","D)10 min"], // ans C
            },
        
            { name: "question7",
              type: "list",
              message: chalk.blueBright(Q7),  // 
              choices: ["A)Crocodile","B)Dolphin" ,"C)Penguin","D)BlueWhale "], //ans A
            },
        
            { name: "question8",
              type: "list",
              message: chalk.blueBright(Q8), // ans c
              choices: ["A)function","B)def","C)func","D)fun"],
            },
        
            { name: "question9",
              type: "list",
              message: chalk.blueBright(Q9),
              choices:["A)Bone","B)Nail","C)Eyes","D)Brain"]// ans b
            },
        
            { name: "question10",
              type: "list",
              message: chalk.blueBright(Q10),
              choices:  ["A):","B)=","C)->","D)=>"], 
        
            }])
            
            console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
            console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);
            
            //------question 1 answer check--------//
            
        if(easyQuiz.question6 === "C)11 min"){
            console.log(chalk.yellow.bold(` ${Q6} \n\n`)+ chalk.green(`   Answer is Correct :  ${easyQuiz.question6}\n`));
            CorrectAnswers++
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }else{
            console.log(chalk.red.bold(` ${Q6} \n\n  Answer is Incorrect :`)  +  chalk.green(` Correct Answer is :B)5 min \n`));
            incorrectAnswers ++
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }  
        //------question 2 answer check--------//
        
        if(easyQuiz.question7 === "A)Crocodile"){
            console.log(chalk.yellow.bold(` ${Q7} \n\n`)+ chalk.green(`   Answer is Correct :  ${easyQuiz.question7}\n`));
            CorrectAnswers++
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }else{
            console.log(chalk.red.bold(` ${Q7} \n\n  Answer is Incorrect :`)  +  chalk.green(` Correct Answer is :B)Crocodile \n`));
            incorrectAnswers ++
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }  
        
        //------question 3 answer check--------//  
         
        if(easyQuiz.question8 === "A)function"){
            console.log(chalk.yellow.bold(` ${Q8} \n\n`)+ chalk.green(`   Answer is Correct :  ${easyQuiz.question8}\n`));
            CorrectAnswers++
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }else{
            console.log(chalk.red.bold(` ${Q8} \n\n  Answer is Incorrect :`)  +  chalk.green(` Correct Answer is :A)function \n`));
            incorrectAnswers ++
            console.log(chalk.magentaBright.bold("-------------------------------"));
        }  
        
           //------question 4 answer check--------//  
           
           if(easyQuiz.question9 === "B)Nail"){
               console.log(chalk.yellow.bold(` ${Q9} \n\n`)+ chalk.green(`   Answer is Correct :  ${easyQuiz.question9}\n`));
               CorrectAnswers++
               console.log(chalk.magentaBright.bold("-------------------------------"));
           }else{
               console.log(chalk.red.bold(` ${Q9} \n\n  Answer is Incorrect :`)  +  chalk.green(` Correct Answer is :B)Nail \n`));
               incorrectAnswers ++
               console.log(chalk.magentaBright.bold("-------------------------------"));
           }  
          
           //------question 5 answer check--------//  
           
           if(easyQuiz.question10 === "A):"){
               console.log(chalk.yellow.bold(` ${Q10} \n\n`)+ chalk.green(`   Answer is Correct :  ${easyQuiz.question10}\n`));
               CorrectAnswers++
               console.log(chalk.magentaBright.bold("-------------------------------"));
           }else{
               console.log(chalk.red.bold(` ${Q10} \n\n  Answer is Incorrect :`)  +  chalk.green(` Correct Answer is :A) : \n`));
               incorrectAnswers ++
               console.log(chalk.magentaBright.bold("-------------------------------"));
           }  
           console.log(`\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐`);
           console.log(`⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n`);
           
           /////Score Board////
           console.log(chalk.magentaBright.bold("-------------------------------"));
           
           console.log(chalk.green.bold("⭐-Correct Answer :"),CorrectAnswers);
           console.log(chalk.red.bold("⭐-Incorrect Answer :"),incorrectAnswers,"\n");
           console.log(chalk.magentaBright.bold(`Hello! ${playerName}  (Your scored : 0${CorrectAnswers} )`));
           
           console.log(chalk.magentaBright.bold("-------------------------------"));
   
           
           break;
   //---------------------Easy Mode Ended---------------------------------------------------------
   }
           
           

        
        


        
        