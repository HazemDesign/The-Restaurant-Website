var menuObjs = [
    {
        name: "Sayadieh fish-rice", price: "€120.00",
        img: "/Images/menu/Fish-Menu/Sayadieh-fish-and-rice1.jpg",
        desc: "Roasted eggplant, garlic, tahini, lemon and extra virgin olive oil. Gluten free and vegan."
    },

    {
        name: "Grilled fish", price: "€110.00",
        img: "'/Images/menu/Fish-Menu/grilled-rainbow-trout.jpg",
        desc: "Chickpeas, tahini, parsley and kuzbara. Gluten free and Vegan."
    },

    {
        name: "Molokhea and fish", price: "€85.00",
        img: "/Images/menu/Fish-Menu/fish with molokhea1.jpg",
        desc: "Purslane, romaine lettuce, cucumber, tomatoes, radish, mint, pita chips, sumac, pomegranate, lemon and extra virgin olive oil. Vegan."
    }
    ,
    {
        name: "Cheese Pizza", price: "€80.00",
        img: "/Images/menu/Pizza-Menu/Cheese-Pizza.jpg",
        desc: "Chickpea puree, tahini, lemon and extra virgin olive oil. Gluten free and vegan"
    },


    {
        name: "Pepperoni Pizza", price: "€100.00",
        img: "/Images/menu/Pizza-Menu/pepperoni-pizza.jpg",
        desc: "Walnuts, roasted peppers, pomegranate and extra virgin olive oil. Vegan."
    },

    {
        name: "Margherita Pizza", price: "€120.00",
        img: "/Images/menu/Pizza-Menu/MARGHERITA-pizza.jpg",
        desc: "Cauliflower, Aleppo pepper, lemon, garlic yogurt and tahini. Gluten free. Vegetarian."
    },

    {
        name: "Veggie Pizza", price: "€200.00",
        img: "/Images/menu/Pizza-Menu/veggie-pizza1.jpg",
        desc: "Aleppo pepper, cilantro, herbs and garlic toum. Gluten free. Vegetarian."
    },

    {
        name: "Chicken Pizza", price: "€140.00",
        img: "/Images/menu/Pizza-Menu/CHICKEN-PIZZA1.jpg",
        desc: "Ground Angus beef, parsley and Aleppo pepper. Gluten free."
    },

    {
        name: "New-York Pizza", price: "€75.00",
        img: "/Images/menu/Pizza-Menu/NYC-Pizza.jpg",
        desc: "Ground lamb, red onion, thyme and sumac. Served Armenian pilaf, toasted vermicelli, almonds and grilled veggies."
    },

    {
        name: "Smoked Salmon Pizza", price: "€240.00",
        img: "/Images/menu/Pizza-Menu/smoked-salmon-pizza.jpg",
        desc: "Armenian beef dumpling, garlic yogurt sauce and sumac."
    },
];
var btn1 = document.getElementById("0");
btn1.onclick=cart(0);
// document.getElementById("1").onclick=cart(1); 
// document.getElementById("2").onclick=cart(2);
// document.getElementById("3").onclick=cart(3);
// document.getElementById("4").onclick=cart(4);
// document.getElementById("5").onclick=cart(5);
// document.getElementById("6").onclick=cart(6);
// document.getElementById("7").onclick=cart(7);
// document.getElementById("8").onclick=cart(8);
// document.getElementById("9").onclick=cart(9);


var menuIndex;

var recObjs =[];

 function cart(menuIndex) {
    
    
    recObjs[0]=menuObjs[menuIndex];
    
   console.log(recObjs[menuIndex]);
   console.log(0);
    return recObjs;
    
};

 