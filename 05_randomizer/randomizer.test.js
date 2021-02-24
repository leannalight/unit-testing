const randomizer = require('./randomizer');

it('Создаёт приветствие', () => {
  expect(typeof randomizer()).toBe('number');
  expect(randomizer()).toBeGreaterThan(10);
  expect(randomizer()).toBeLessThan(80);
});
