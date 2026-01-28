function RetrieveProfit(prices){
 let minPrice=Infinity;
 let maxProfit=0;

 for(let i=0;i<prices.length;i++){
if(prices[i]<minPrice){
    minPrice=prices[i];
}

let profit=prices[i]-minPrice;

if(profit>maxProfit){
    maxProfit=profit;
}


 }
 
return maxProfit;

}


let prices=[7,1,5,3,6,4]
let result=RetrieveProfit(prices);
console.log(result)