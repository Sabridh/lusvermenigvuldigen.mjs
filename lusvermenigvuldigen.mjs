import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

for(let teller = 1;teller <= 10; teller++){
    let berekening = teller * 5
    console.log(`${teller} x ${5} = ${berekening}`);
    
}   process.exit()