import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { getRandomValue } from '../../../helpers/getRandomValue';

interface BoxProps {
    value: string;
    onComplete: ($div: HTMLDivElement) => void;
}

interface BoxWrapperProps {
    fontSize: number;
    left: string;
    top: string;
}

export const Box = memo(({ value, onComplete }: BoxProps) => {
    const $boxRef = useRef<HTMLDivElement | null>(null);
    const calculateInlineStyles = function (): { left: number; top: number; fontSize: number } {
        const wWidth = window.innerWidth;
        const wHeight = window.innerHeight;
        const boxWidth = 80;

        return {
            left: getRandomValue(0, wWidth - boxWidth),
            top: getRandomValue(0, wHeight - boxWidth),
            fontSize: getRandomValue(10, 16),
        };
    };

    useEffect(() => {
        if (!$boxRef.current) {
            return;
        }

        const $box = $boxRef.current;
        const timeline = gsap.timeline({ onComplete: () => onComplete($box) });

        timeline
            .from($box, { opacity: 0, y: 100, scale: 0, duration: 0.5 })
            .from($box, { delay: 0.2, rotationY: 720, duration: 0.5 })
            .to($box, { scale: 2.5, opacity: 0, duration: 0.1 });
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
