const deleteUser = require("./routes/userRoutes/deleteUser");
const updateUser = require("./routes/userRoutes/updateUser");

// const createUser = require('./userRoutes/createUser');
// const getUser = require('./userRoutes/getUser');
// const listUsers = require('./userRoutes/listUsers');

// Массив для хранения пользователей
let users = []
let currentId = 1;

module.exports = {
  getUsers: () => users,
  addUser: (user) => {
    user.id = currentId++;
    users.push(user);
  },
  updateUser: (id, updatedData) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedData};
      return users[userIndex];
    }
    return  null;
  },
  deleteUser: (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      return true;
    } 
    return false;
  },
  getUserById: (id) => users.find(u => u.id === id)
};
