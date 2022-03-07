/*
    ### Transformar notas escolares 

    Crie um algoritimo que transforme as notas de sistema numérico para sistema de notas em caractares tipo A B C:

    * de 90 pra cima = A
    * de 80 - 89 = B
    * de 70 - 79 = C
    * de 60 - 69 = D
    * menor que 60 = F
     
*/

let points = 99


function getPoints (points){

    if (points >= 90){
        console.log( 'nota: A' )
    }else if(points>=80 && points<=89){
        console.log('nota: B')
    }else if(points >=70 && points <=79){
        console.log('nota: C')
    }else if( points >=60 && points <=69){
        console.log('nota: D')
    }else{
        console.log('nota: E')
    }

    return points
}

console.log(getPoints(0))
console.log(getPoints(90))
console.log(getPoints(80))
console.log(getPoints(70))
console.log(getPoints(60))