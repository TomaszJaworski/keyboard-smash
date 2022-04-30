interface EmFunc {
    (input: number | string, base: number | string): string;
}

export const em: EmFunc = function (input, base) {
    // parsing values into the number
    const inputValue: number = typeof input !== 'number' ? parseInt(input, 10) : input;
    const baseValue: number = typeof base !== 'number' ? parseInt(base, 10) : base;

    if (isNaN(inputValue)) {
        throw new Error(`Passed input value is incorect: ${input}`);
    }

    if (isNaN(baseValue)) {
        throw new Error(`Passed base value is incorect: ${base}`);
    }

    return `${inputValue / baseValue}`;
};
