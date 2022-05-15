/**
 * Check if param value is special key (Space, Shift..)
 * Special keys are looks differently and have other differences on how it is rendered
 */
export const isSpecialKey = function (value: string): boolean {
    return specialKeysSymbol.includes(value);
};

/**
 * List of supported special symbols for keys
 */
export const specialKeysSymbol: string[] = ['Enter', 'Space', 'Shift'];
