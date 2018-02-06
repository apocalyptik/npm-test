'use strict';

const mean = require('stats-mean');
const variance = require('stats-variance');
const covariance = require('@elstats/covariance');

function linearRegression(points) {

    const X = [];
    const Y = [];
    points.forEach(function (point) {
        X.push(point[0]);
        Y.push(point[1]);
    });

    const a = covariance(X, Y) / variance.calc(X);
    
    return {
        b: mean.calc(Y) - a * mean.calc(X),
        a
    };
}

module.exports = linearRegression;