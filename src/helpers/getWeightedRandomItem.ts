/**
 * Get random item from array. Randomize by weights
 * Solution from https://stackoverflow.com/a/55671924
 */
export const getWeightedRandomItem = function (items: any[], weights: number[]) {
    let i;

    for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0;

    let random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++) if (weights[i] > random) break;

    return items[i];
};
