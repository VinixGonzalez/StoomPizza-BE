async function getUserData(userId) {
  // Lógica para buscar os dados no banco de dados

  const userList = [
    {
      id: "1",
      name: "Vinicius Gonzalez",
      email: "vinix74@hotmail.com",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFlPMCPdML7xQ/profile-displayphoto-shrink_800_800/0/1544562945657?e=1623888000&v=beta&t=Z2vbWz7sTEZSS2Xp4v_MTk4rYiD0CLId5_07mwcF-kc",
      points: 50,
      totalOrders: 5,
      address: {
        street: "R. Irineu Marinho",
        number: "325",
        complement: "apt 301",
        city: "Juiz de Fora",
      },
    },
    {
      id: "2",
      name: "User Test",
      email: "user@test.com",
      picture:
        "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
      points: 10,
      totalOrders: 2,
      address: {
        street: "R. Test",
        number: "000",
        complement: "apt 100",
        city: "Test City",
      },
    },
  ];

  console.log(userId);

  const user = userList.find((user) => user.id === userId);

  if (!user) {
    return "Usuário não encontrado";
  }

  return user;
}

module.exports = {
  getUserData,
};
