let bigMacDollarPrice = 5.66;
let macIndex;

function bigMacIndex(macPrice){
     macIndex = macPrice / bigMacDollarPrice;
    return macIndex;
}

function valuesComparing(currenctPrice, actualRate){
    let rateDifference = (actualRate-macIndex) / actualRate;
    let rateDifferencePercent = rateDifference * 100;
    let roundedRateDifferencePercent = rateDifferencePercent.toFixed(2);
    if(macIndex < actualRate){
        return  currenctPrice+  " is under-valued by " +roundedRateDifferencePercent + "% against the US dollar"; 
    }
    else
    {
     
        return currenctPrice+  " is over-valued by " +(-roundedRateDifferencePercent) + "% against the US dollar"; 
    }
}
console.log("BIG MAC FOR 5 COUNTRIES -> Argentina, China, Britain, Canada, Brazil")
console.log( "Price of Big Mac - Argentina: "+bigMacIndex(3.75));
console.log(valuesComparing("Argentine peso",85.37));


console.log("Price of Big Mac - China:  " +bigMacIndex(3.46));
console.log(valuesComparing("chineese Renminbi",6.48));


console.log("Price of Big Mac - Britain: "+bigMacIndex(4.44));
console.log(valuesComparing("pound",0.74));


console.log("Price of Big Mac - Canada:  "+bigMacIndex(5.29));
console.log(valuesComparing("Canadian dollar",1.28));


console.log("Price of Big Mac - Brazil: "+bigMacIndex(3.98));
console.log(valuesComparing("Brazilian real",5.50));
