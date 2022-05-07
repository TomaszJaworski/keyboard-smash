/**
 * Function check if clicked key is in our scope
 */
export const filterKeys = function (key: string): boolean {
    if (!key) return false;

    return key.match(/^([a-zA-Z\d]|Shift|Enter|Space)$/g) !== null;
};
