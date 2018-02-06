import { calc as mean } from 'stats-mean';
import { calc as variance } from 'stats-variance';
import covariance from '@elstats/covariance';

export default function linearRegression(points) {

    const X = [];
    const Y = [];
    points.forEach(function (point) {
        X.push(point[0]);
        Y.push(point[1]);
    });

    const a = covariance(X, Y) / variance(X);

    return {
        b: mean(Y) - a * mean(X),
        a
    };
}