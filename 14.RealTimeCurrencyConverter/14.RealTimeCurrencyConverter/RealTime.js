import https from "https";
import readline from 'readline';
import chalk from "chalk";
import { json } from "stream/consumers";
const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout,
    }
)
const convertCurrency=(amount,rate)=>{
    return (amount*rate);
}
const url='https://v6.exchangerate-api.com/v6/95d0789b98c83c0442c52667/latest/USD';
https.get(url,(response)=>{
    let data='';
    response.on('data',(chunk)=>{
        data=data+chunk;
        response.on('end',()=>{
            const rates=JSON.parse(data).conversion_rates;
            rl.question('Enter the amount in USD:',(amount)=>{
                rl.question('\nEnter the Currency:',(currency)=>{
                    const rate=rates[currency.toUpperCase()];
                    if(rate){
                        console.log(`${amount} in ${currency} is ${convertCurrency(amount,rate)}`);
                    }
                })
            })

        })

    })
}
)
