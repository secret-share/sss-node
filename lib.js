#!/usr/bin/env node

const crypto = require("crypto");
const _sss = require("./build/Release/shamirsecretsharing");


exports.createShares = function createShares(data, n, k) {
  return new Promise((resolve) => {
    _sss.createShares(data, n, k, resolve);
  });
};


exports.combineShares = function combineShares(shares) {
  return new Promise((resolve) => {
    _sss.combineShares(shares, resolve);
  }).then((x) => {
    if (x === null) {
      throw "InvalidAccessError: invalid or too few shares provided";
    } else {
      return x;
    }
  });
};


exports.createKeyshares = function createKeyshares(key, n, k) {
  return new Promise((resolve) => {
    _sss.createKeyshares(key, n, k, resolve);
  });
}


exports.combineKeyshares = function combineKeyshares(keyshares) {
  return new Promise((resolve) => {
    _sss.combineKeyshares(keyshares, resolve);
  });
}
