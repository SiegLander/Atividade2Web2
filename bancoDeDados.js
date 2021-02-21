//Incremento automatico de ID
const sequence = {
  _id: 0,
  get id() {
    return this._id++;
  },
};
var users = [];

//cadastrando novo usuário
//@params (JSON user)
function createUser(user) {
  user.id = sequence.id;
  users[user.id] = user;
  return user;
}

//atualizando usuário
//@params (int id, JSON user)
function updateUser(id, user) {
  if (users[id] === undefined) {
    return "Erro! Usuário não encontrado!";
  } else {
    user.id = parseInt(id);
    users[id] = user;
  }
  return user;
}

//deletando usuário
//@params (int id)
function deleteUser(id) {
  if (users[id] === undefined) {
    return "Erro! Usuário não encontrado!";
  } else {
    users.splice(id, 1);
    return "Usuário deletado!";
  }
}

//listando infos de um usuário
//@params (int id)
function getUser(id) {
  return users[id];
}

//listando infos de todos usuários
//@params (int id)
function listUsers() {
  return Object.values(users);
}

module.exports = { createUser, updateUser, deleteUser, getUser, listUsers };
