import assert from 'assert';
import './solution';

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

describe('Hash', () => {
  it('should work', () => {
    assert.deepEqual(obj.hash('person.history.bio'), { funFact: 'I like fishing.' });
    assert.deepEqual(obj.hash('person.name.key'), undefined);
    assert.deepEqual(obj.hash('person.history.homeStreet'), undefined);
    assert.deepEqual(obj.hash('person.animal.pet.needNoseAntEater'), undefined);
  });
});
