
describe('The given shopping list should have a length of 7', ()=>{
	expect(shoppingList.length == 7).toBeTruthy();
}); 

describe('The given fruit and veg list should have a length of 8', ()=>{
	expect(fruitVegList.length == 8).toBeTruthy();
}); 

describe('The Final List of fruit and vegetables should be of length 3', ()=>{
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

