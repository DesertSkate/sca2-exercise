// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

const coinToss = (guess) => {
  const result = Math.round(Math.random());
  const didWin = guess === result;

  if (didWin) {
    console.log("The user was correct, it was " + result)
    return true
  } else {
    console.log("The user was incorrect, they said it was " +  guess + ", but it was actually " + result)
    return false
  }
};

const getUser = callback => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  };
  callback(user.guess);
};

getUser(coinToss)