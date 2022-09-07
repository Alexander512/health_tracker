const { expect } = require('chai');
const { minimum, maximum, mean } = require('../client/helper/Statistics.js');

describe('Statistics functions', () => {
  let values;
  beforeEach(() => {
    values = [ 7, 23, 16, 3, 19, 31, 49, 22, 31, 39 ];
  });
  describe('minimum', () => {
    it('returns a value of type number', () => {
      let result = minimum(...values);
      expect(typeof result).to.equal('number');
    });
    it('returns the value three', () => {
      let result = minimum(...values);
      expect(result).to.equal(3);
    });
  });
  describe('maximum', () => {
    it('returns a value of type number', () => {
      let result = maximum(...values);
      expect(typeof result).to.equal('number');
    });
    it('returns the value forty-nine', () => {
      let result = maximum(...values);
      expect(result).to.equal(49);
    });
  });
  describe('mean', () => {
    it('returns a values of type number', () => {
      let result = mean(...values);
      expect(typeof result).to.equal('number');
    });
    it('returns the value twenty-four', () => {
      let result = mean(...values);
      expect(result).to.equal(24);
    });
  });
});
