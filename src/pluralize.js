'use strict';
var pluralize = require('pluralize');

pluralize.addPluralRule('parking', 'carparks');

pluralize.addPluralRule('hotel_with_parking', 'hotels');

pluralize.addPluralRule('insurance', 'insurance');

// we don't pluralise theatrebreaks for some reason
pluralize.addPluralRule('theatrebreak', 'theatrebreak');

module.exports = pluralize;
