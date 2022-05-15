import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getRandomValue } from '../../../helpers/getRandomValue';
import { getBoxAnimations } from '../helpers/getBoxAnimations';

interface BoxProps {
    value: string;
    onComplete: ($el: HTMLDivElement, index: number) => void;
    index: number;
}

interface BoxWrapperProps {
    fontSize: number;
    left: string;
    top: string;
}

export const Box = memo(({ value, onComplete, index }: BoxProps) => {
    const $boxRef = useRef<HTMLDivElement | null>(null);

    const calculateInlineStyles = function (): { left: number; top: number; fontSize: number } {
        const wWidth = window.innerWidth;
        const wHeight = window.innerHeight;
        const boxWidth = 80;

        return {
            left: getRandomValue(0, wWidth - boxWidth),
            top: getRandomValue(0, wHeight - boxWidth),
            fontSize: getRandomValue(10, 20),
        };
    };

    useEffect(() => {
        if (!$boxRef.current) {
            return;
        }

        const $el = $boxRef.current;

        getBoxAnimations($el, {
            onComplete: () => onComplete($el, index),
        });
    }, []);

    return (
        <BoxWrapper ref={$boxRef} {...calculateInlineStyles()}>
            <BoxWrapperInput>{value}</BoxWrapperInput>
        </BoxWrapper>
    );
});

const BoxWrapper = styled.div.attrs<BoxWrapperProps>((props) => {
    const { fontSize, left, top } = props;

    return {
        style: {
            fontSize,
            left,
            top,
        },
    };
})`
    width: 5em;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 10px;
    border: 3px solid red;
    background-color: antiquewhite;
    position: fixed;
`;

const BoxWrapperInput = styled.span`
    font-size: 2em;
`;
