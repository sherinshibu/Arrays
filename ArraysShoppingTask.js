var shoppingList = ["Eggs","Apples","Bread","Milk","Carrots","Potatoes","Chicken"] //the shopping list
shoppingList.length; // the length of shoppingList is 7
var fruitVegList = ["Apples","Apricot","Artichoke","Carrots","Cabbage","Onion","Oranges","Potatoes"] //the list of accepted fruits and vegetables
fruitVegList.length; // the length of fruitVegList is 8

var fruitVegShoppingList = ["Apples", "Carrots", "Potatoes"];
fruitVegShoppingList.length; // the length of fruitVegShoppingList is 3

// Code Below
for ( var i = 0; i < fruitVegList.length - 1; i++){
  for ( var j = 0; j < shoppingList.length - 1; j++){
if (fruitVegList[ i ] == shoppingList [j]){
  fruitVegShoppingList.push( fruitVegList [i])
}
  }
}