/**
 * DO NOT REMOVE THIS COMMENT
 *
 * @Target ArraysShoppingTask.js
 */

describe('The given shopping list should remain have a length of 7', ()=>{
	expect(shoppingList.length == 7).toBeTruthy();
}); 

describe('The given shopping list should remain have a length of 7', ()=>{
	expect(shoppingList.length == 7).toBeTruthy();
}); 

describe('List of fruit and vegetables should be of length 3', ()=>{
	expect(fruitVegShoppingList.length == 3).toBeTruthy();
});

describe('List of fruit and vegetables contain "Apples"', ()=>{
	expect(fruitVegShoppingList).toInclude("Apples");
});

describe('List of fruit and vegetables contain "Carrots"', ()=>{
	expect(fruitVegShoppingList).toInclude("Carrots");
});

describe('List of fruit and vegetables contain "Potatoes"', ()=>{
	expect(fruitVegShoppingList).toInclude("Potatoes");
});

