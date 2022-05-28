import styled from 'styled-components';
import { ChangeEvent, useId } from 'react';

interface RangeProps {
    name: string;
    min: number;
    max: number;
    step: number;
    value: number;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Range = function ({ min, max, step, value, label, onChange }: RangeProps) {
    const id = useId();

    return (
        <RangeWrapper>
            <input
                id={id}
                type="range"
                name="keyboardSize"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
            />
            <RangeLabel htmlFor={id}>{label}</RangeLabel>
        </RangeWrapper>
    );
};

const RangeWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const RangeLabel = styled.label`
    margin-left: 10px;
`;
