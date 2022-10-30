// Module 1, Lesson 2, Assignmnet 1, Task 1
// "Shrimp Cocktail", "Rosemary Chicken", "Lava Cake"

const foodMenu = {
    restaurantName : "Cafe Refocus",
    dishes : [{
        dishID: "A01",
        dishName: "Shrimp Cocktail",
        dishPrice: 470.00,
        ingredients: ['Shrimp', 'Salad', 'Lime'],  
    },
        {
        dishID: "E02",
        dishName: "Rosemary Chicken",
        dishPrice: 650.00,
        ingredients: ['Chicken', 'Rosemary Seasoning', 'Garlic-Buttery Steamed-Vegetables'],
    },
        {
        dishID: "D03",
        dishName: "Lava Cake",
        dishPrice: 420,
        ingredients: ['Chocolate Cake', 'Melted Chocolate', 'Vanilla-Ube Ice-Cream'],
    }
    ],
    displayRestaurantName : function () {
        console.log(this.restaurantName);
    },
    displayMenu : function () {
            for (display of this.dishes){
            console.log(),
            console.log(`${display.dishName}, ₱${display.dishPrice}.00`),
            console.log(`Served with: ${display.ingredients}`);
        }       
        }
    };

foodMenu.displayRestaurantName();
foodMenu.displayMenu();
