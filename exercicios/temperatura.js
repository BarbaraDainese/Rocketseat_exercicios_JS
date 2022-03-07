/*
### Celsius em fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para a outra.

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/




function conversionDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')
    
    //fluxo de erro
    if(!celsiusExist && !fahrenheitExist){
        throw new Error('Grau não identificado')
    }
    

    //fluxo ideal F -> C
    let updatedDegree = Number (degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit-32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if(celsiusExist){
        updatedDegree = Number (degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'

    }

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(conversionDegree('50F'))
    console.log(conversionDegree('10C'))
    conversionDegree('50Z')

}catch(error){
    console.log(error.message)
}