import styled from 'styled-components';
import { ForwardedRef, forwardRef } from 'react';

interface BoxProps {
    value: string;
}

export const Box = forwardRef(({ value }: BoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <BoxWrapper ref={ref}>{value}</BoxWrapper>;
});

const BoxWrapper = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid red;
    background-color: antiquewhite;
`;
