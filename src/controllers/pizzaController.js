async function getRestaurantData() {
  // Lógica para buscar os dados no banco de dados

  const data = {
    promoDay: {
      id: 1,
      pizzaName: "Pepperoni",
      price: 25,
      doughId: 1,
      points: 10,
      sizeId: 3,
      picture:
        "https://www.mulherportuguesa.com/wp-content/uploads/2016/10/Receita-de-Pizza-Pepperoni.jpg",
    },
    menu: {
      pizzaList: [
        {
          id: 1,
          name: "Pepperoni",
          ingredients:
            "Mussarela, onion, pepperoni, sliced tomatoes, house spices",
          picture:
            "https://www.mulherportuguesa.com/wp-content/uploads/2016/10/Receita-de-Pizza-Pepperoni.jpg",
        },
        {
          id: 2,
          name: "Chicken Cream Cheese",
          ingredients: "Mussarela, chicken, cream cheese, house spices",
          picture:
            "https://image.freepik.com/free-photo/chicken-cream-cheese-pizza-table_74692-560.jpg",
        },
        {
          id: 3,
          name: "Mussarela",
          ingredients: "Mussarela, onion, sliced tomatoes, house spices",
          picture:
            "https://jenniferbanz.com/wp-content/uploads/2018/09/tomato-pizza-4.jpg",
        },
        {
          id: 4,
          name: "3 Cheese",
          ingredients: "Mussarela, parmesan, gorgonzola, house spices",
          picture:
            "https://www.modernhoney.com/wp-content/uploads/2019/05/The-Best-3-Cheese-White-Pizza-2.jpg",
        },
      ],
    },
    doughTypes: [
      { id: 1, name: "Pan", description: "Massa Pan fofinha e crocante" },
      {
        id: 2,
        name: "Tradicional",
        description:
          "Deliciosa massa caseira tradicional feita com os melhores ingredientes",
      },
      { id: 3, name: "Fina", description: "- massa + recheio!" },
    ],
    sizes: [
      { id: 1, name: "Individual", price: 15 },
      { id: 2, name: "Média (6 fatias)", price: 25 },
      { id: 3, name: "Família (10 fatias)", price: 35 },
      { id: 4, name: "Gigante (14 fatias)", price: 45 },
    ],
  };

  return data;
}

module.exports = {
  getRestaurantData,
};
