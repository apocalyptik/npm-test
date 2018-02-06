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

    const b = covariance(X, Y) / variance.calc(X);
    
    return {
        a: mean.calc(Y) - b * mean.calc(X),
        b
    };
}

module.exports = linearRegression;