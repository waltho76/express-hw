const getSearchDrinks = (req,res) => {
    res.send({"drinks":
    [
        {
            strDrink: 'Margarita',
            strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg",
            strIngredient1: "Tequila",
			strIngredient2: "Triple sec",
			strIngredient3: "Lime juice",
			strIngredient4: "Salt",
            strMeasure1: "1 1\/2 oz ",
			strMeasure2: "1\/2 oz ",
		    strMeasure3: "1 oz ",
            strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
        },
        {
            strDrink: "Blue Margarita",
            strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/bry4qh1582751040.jpg",
            strIngredient1: "Tequila",
			strIngredient2: "Blue Curacao",
			strIngredient3: "Lime juice",
			strIngredient4: "Salt",
            strMeasure1: "1 1\/2 oz ",
			strMeasure2: "1 oz ",
			strMeasure3: "1 oz ",
			strMeasure4: "Coarse ",
            strInstructions: "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve."
        },
        {
            strDrink: "Tommy's Margarita",
            strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/loezxn1504373874.jpg",
            strIngredient1: "Tequila",
			strIngredient2: "Lime Juice",
			strIngredient3: "Agave syrup",
            strMeasure1: "4.5 cl",
			strMeasure2: "1.5 cl",
			strMeasure3: "2 spoons",
            strInstructions: "Shake and strain into a chilled cocktail glass."            
        }
    ]
})
}
module.exports = {
    getSearchDrinks
}