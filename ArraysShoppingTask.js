var shoppingList = ["Eggs","Apples","Bread","Milk","Carrots","Potatoes","Chicken"] //the shopping list
shoppingList.length; // the length of shoppingList is 7
var fruitVegList = ["Apples","Apricot","Artichoke","Carrots","Cabbage","Onion","Oranges","Potatoes"] //the list of accepted fruits and vegetables
fruitVegList.length; // the length of fruitVegList is 8

var fruitVegShoppingList = ["Apples", "Carrots", "Potatoes"];
fruitVegShoppingList.length; // the length of fruitVegShoppingList is 3

// Code Below
var fruitVegList = ["Apples","Apricot","Artichoke","Carrots","Cabbage","Onion","Oranges","Potatoes"];
var x;
for (x of fruitVegList){
    document.write(x + "<br >");
}
var txt = "List of fruit and vegetables contain ";
var fruitVegShoppingList = ["Apples", "Carrots", "Potatoes"];
fruitVegShoppingList.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}