import test from 'ava';
import linearRegression from './';

test('unicorns are truthy', t => {

    const points = [
        [43, 99],
        [21, 65],
        [25, 79],
        [42, 75],
        [57, 87],
        [59, 81]
    ];

    const line = linearRegression(points);

    t.is(line.a, 65.1415715245131);
    t.is(line.b, 0.38522498321020804);
});
