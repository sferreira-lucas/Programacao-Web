import PromptSync from "prompt-sync"
import chalk from 'chalck'

const prompt = PromptSync()

var x;
let soma = 0;
const qtdValores = 5;
console.log("Olá")
for(x = 0; x < qtdValores; x++)
{
    const valores = Number(prompt(`Digite o ${x}º valor: `))

    soma = soma + valores;
}

const mediaValores = soma / qtdValores;

if(mediaValores >= 80)
{
    console.log(chalk.green(`A média dos valores é ${mediaValores}`))
}
else if(mediaValores >= 30)
{
    console.log(chalk.yellow(`A média dos valores é ${mediaValores}`))
}
else
{
    console.log(chalk.red(`A média dos valores é ${mediaValores}`))
}