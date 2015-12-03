'use strict';
var pluralize = require('../src/pluralize');
var expect = require('chai').expect;

describe('pluralise', function() {
  describe('parking', function() {
    it('pluralises to the product name we need', function() {
      expect(pluralize('parking')).to.equal('carparks');
    });
  });

  describe('insurance', function() {
    it('does not pluralise insurance', function() {
      expect(pluralize('insurance')).to.equal('insurance');
    });
  });

  describe('theatrebreak', function() {
    it('does not pluralise as we do not use that name', function() {
      expect(pluralize('theatrebreak')).to.equal('theatrebreak');
    });
  });

  describe('hotels', function() {
    it('pluralises to the product name we need', function() {
      expect(pluralize('hotel')).to.equal('hotels');
      expect(pluralize('hotel_with_parking')).to.equal('hotels');
    });
    it('does not double pluralise a plural', function() {
      expect(pluralize('hotels')).to.equal('hotels');
    });
  });
});
