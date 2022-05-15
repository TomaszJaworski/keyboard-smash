type KeysValues = string[];

/**
 * Helper function returning layout of 'qwerty' keyboard.
 * Each nested array is responsible for one row of rendered keyboard
 */
export const getKeyboardLayout = function (): KeysValues[] {
    return [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'Shift'],
        ['Space'],
    ];
};

/**
 * Flatten keyboard layout. Usefully for validation
 */
export const getKeyboardFlatLayout = function (): KeysValues {
    return getKeyboardLayout().flat();
};
