function makeChange(n){
    //cria um array do tipo Set
    const arrayCombinations = new Set();
    //define as variaveis
    let quarters, dimes, nickels, pennies;

    //verifica quantos quarters cabe dentro do valor passado
    for(quarters = 0; quarters*25 <=n; quarters++){
        //verifica quantos dimes cabe dentro do valor passado e sobe pra quarters
        for(dimes = 0; quarters*25 + dimes*10 <=n; dimes++){
            //verifica quantos nickels cabe dentro do valor passado e sobe pra dimes
            for(nickels = 0; quarters*25 + dimes*10 + nickels*5 <= n; nickels++){
                //verifica quantos pennies sobram subtraídos das adições que são feitas nas outras moedas
                pennies = n - (quarters*25 + dimes*10 + nickels*5);

                //cria uma string que contém a quantidade de moedas em cada iteração
                const values = {quarters, dimes, nickels, pennies};
                //adiciona no array a string com quantidades
                arrayCombinations.add(values);
            }
        }
    }

    //retorna o array
    return arrayCombinations;
}

//chama a função makeChange com o valor '26' e escreve o retorno no console
console.log(makeChange(26));