var menuObjs = [
    {
        name: "Sayadieh fish-rice", price: "€120.00",
        img: "Images/menu/Fish-Menu/Sayadieh-fish-and-rice1.jpg",
        desc: "Roasted eggplant, garlic, tahini, lemon and extra virgin olive oil. Gluten free and vegan."
    },

    {
        name: "Grilled fish", price: "€110.00",
        img: "'/Images/menu/Fish-Menu/grilled-rainbow-trout.jpg",
        desc: "Chickpeas, tahini, parsley and kuzbara. Gluten free and Vegan."
    },

    {
        name: "Molokhea and fish", price: "€80.00",
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

//var count =0; 
var menuIndex;
// var cartIndex=0;


function cart(menuIndex) {

    var recObjs=[];
    recObjs.push(menuObjs[menuIndex]);
    console.log(recObjs[0].img);
    return recObjs;
};
var cartObjs = cart(menuIndex);
console.log(cartObjs[0].img);
