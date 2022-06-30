// This to callback
// export { event }
// event.getInventation() => .filter(age >= 18) => .map => { email, invitation text (name, message) }

export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 21, email: 'j@gmail.com' },
    { name: 'Tom', age: 17, email: 't@gmail.com' },
    { name: 'Bob', age: 18, email: 'b@gmail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations()); // {text: 'Hi Bob. Welcome to the party', email: 'b@gmail.com'}

// return this.guests
//   .filter(({ age }) => age >= 18)
//   .map(({ name, email }) => ({
//     email,
//     message: `Dear ${name}! ${this.message}`,
//   }));
