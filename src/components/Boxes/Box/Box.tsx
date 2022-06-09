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
            <BoxWrapperInner>
                <BoxWrapperInput>{value}</BoxWrapperInput>
            </BoxWrapperInner>
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
    padding: 0.3em;
    font-weight: bold;
    border-radius: 10px;
    background: rgb(246, 78, 120);
    background: linear-gradient(45deg, rgba(246, 78, 120, 1) 0%, rgba(146, 28, 243, 1) 100%);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: absolute;
`;

const BoxWrapperInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ffffff20;
`;

const BoxWrapperInput = styled.span`
    font-size: 2em;
    color: #ffffff;
`;
