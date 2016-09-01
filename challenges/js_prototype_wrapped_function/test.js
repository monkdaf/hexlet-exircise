import assert from 'assert';
import './solution';

function speak(name) {
  return `Hello ${name}`;
}

describe('Wrap', () => {
  it('should work', () => {
    const newSpeak = speak.wrap((original, yourName, myName) => {
      const greeting = original(yourName);
      return `${greeting}, my name is ${myName}`;
    });

    const greeting1 = newSpeak('Mary', 'Kate');
    assert.equal(greeting1, 'Hello Mary, my name is Kate');

    const greeting2 = newSpeak('Kate', 'Mary');
    assert.equal(greeting2, 'Hello Kate, my name is Mary');
  });
});
