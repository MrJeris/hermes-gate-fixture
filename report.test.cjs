'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { reportLabel } = require('./report.cjs');

test('returns the expected synthetic label', () => {
  assert.equal(reportLabel(), 'fixture result');
});
