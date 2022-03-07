/*

    ### SISTEMA DE GASTOS FAMILIAR

    Crie eum objeto que terá 2 propriedades, ambas do tipo array.
        * Receitas[]
        * Despesas[]
        
    Agora crie uma função que irá calcular o total de receitas e despesas
    e irá mostrar uma mensagem se afamília está com saldo positivo ou negativo,
    seguido do valor do saldo. 

*/

let balance={
    
    entry: [500, 3000, 2200, 1000],
    expenses: [1500,800,150,100]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateEntry = sum(balance.entry)
    const calculateExpenses = sum(balance.expenses)
    const total = calculateEntry - calculateExpenses

    const itsOk = total >=0
    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`seu saldo é ${balanceText}: ${total}`)

}

calculateBalance()