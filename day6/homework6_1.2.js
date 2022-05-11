function onKeyUp(event) {
    const price = document.getElementById('price');
    const priceWithOutComma = price.value.replaceAll(',','').split('').reverse();
    let newPrice = '';
    for (let i=1; i < priceWithOutComma.length+1; i++){
        newPrice += priceWithOutComma[i-1];
        console.log(priceWithOutComma[i-1])
        if ( i % 3 == 0 && i != priceWithOutComma.length && i != 0){
            newPrice += ',';
        }else{
            
        }
            
    }
    price.value = newPrice.split('').reverse().join('');
}

price.addEventListener('keyup', onKeyUp);
