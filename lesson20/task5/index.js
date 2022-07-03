/* eslint-disable max-classes-per-file */

// user repository, getter

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = users;
    Object.freeze(this._users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(userObj => userObj._name);
  }

  getUserIds() {
    return this._users.map(userObj => userObj._id);
  }

  getUserNameById(userId) {
    return this._users.filter(userObj => userObj._id === userId)[0]._name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');
const user3 = new User('3', 'Ann', 'session-id');

const userRepo = new UserRepository([user1, user2, user3]);

console.log(userRepo);
console.log(userRepo.getUserNames());
console.log(userRepo.getUserIds());
console.log(userRepo.getUserNameById('2'));

console.log(userRepo.users);
// userRepo.users[0] = {}; //Error // used Object.freeze

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
