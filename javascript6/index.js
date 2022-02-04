// 1. Create a “groceries list” array. Each element of the array is an object that contains the
//  name of a product, an amount needed and whether it is bought or not. Write a few functions 
//  for working with this array. 

//     Display the entire list, so that the not yet purchased items go before the bought ones. 
//     Adding a purchase to the list. Note that if a product already exists, the amount needs to
//      be increased in the existing purchase, not in a new one. 
//     Purchasing a product. The function accepts the name of a product and marks it as bought.
// let groceries =[
//     { "name": "banana",
//         "buy": "yes",
//         "amount":3
//     },
//     {"name":"water",
//         "buy": "no",
//         "amount":0
//     },
//     {"name":"chocolate",
//         "buy": "yes",
//         "amount": 500
//     }
// ]
// function BuyNow(a,b){
//   let comparison = 0;
//   if (a.buy > b.buy) {
//     comparison = 1;
//   } else if (a.buy < b.buy) {
//     comparison = -1;
//   }
//   return comparison;
// }

// groceries.sort(BuyNow);

// function AddItem(array,item){
        // for(let i=0;i<=array.length;i++){
        //     if (array[i]==item){
        //         array[i].amount +=item.amount
        //     }

        // }
//     else
//     (array.push(item))
// }
// function alreadyBought(product){
    // for (let i=0; i<=groceries.length, i++){
    //     if (groceries[i]==product){
    //         groceries[i].buy=="no"
    //     }
    // }
// }
// 2. Create an array that describes a shop receipt. Each element of the array consists of
//  the name of the product, an amount bought, and price per item. Write the following functions. 

//     Print the receipt out on the screen.
//     Counting the sum of the purchase.
//     Extracting the most expensive item on the receipt.

// let receipt=[
//     {   "name": "banana",
//         "price": 20,
//         "amount": 3
//     },
//     { "name":"chocolate",
//         "price": 40,
//         "amount":2
//     },
//     {"name":"iceCream",
//         "price":5,
//         "amount":1
//     }
// ]
// function PrintMe(){
//     console.table(receipt);
// }
// PrintMe()
// function Count(){
//     console.log((receipt[0].amount*receipt[0].price)+(receipt[1].price*receipt[1].amount)+(receipt[2].price*receipt[2].amount))

// }
// Count()
// function Expensive(){
//     console.log(Math.max(receipt[1].price, receipt[0].price, receipt[2].price))
// }
// Expensive()
// 3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element
//  of the array is an object consisting of two properties: style name and style value, Write 
//  a function that accepts the style array and a text and puts out this text via document.write() 
//  in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.
// let styles=[
//     {
//         "color":"green",
//         "font-size":24,
//         "text-decoration":"none"
//     },
//     {
//         "color":"yellow",
//         "font-size":30,
//         "text-decoration":"underline"
//     },
//     {
//         "color":"grey",
//         "font-size":12,
//         "text-decoration":"overline"
//     }
// ]
// function printThis(stylesIndex, text){
//     stylesIndex=prompt("Enter Index:")
//     text=prompt("enter text")
//     document.write(text, styles[stylesIndex]["color"], " ", styles[stylesIndex]["font-size"], " ", styles[stylesIndex]["text-decoration"])
// }
// printThis()


