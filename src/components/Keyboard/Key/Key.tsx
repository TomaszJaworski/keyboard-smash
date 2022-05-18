import React from 'react';
import styled, { css } from 'styled-components';
import { em } from '../../../helpers/stylesHelpers';

interface KeyProps {
    value: string;
    isSelected: boolean;
    keyMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
    keyMouseUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

interface KeyButtonProps {
    isSelected: boolean;
}

export const Key = function ({ value, isSelected, className, keyMouseDown, keyMouseUp }: KeyProps) {
    return (
        <KeyButton
            isSelected={isSelected}
            className={className}
            onMouseDown={keyMouseDown}
            onMouseUp={keyMouseUp}
            data-value={value}
        >
            <KeyValue>{value}</KeyValue>
        </KeyButton>
    );
};

const KeyButton = styled.button<KeyButtonProps>`
    width: ${({ theme }) => em('45px', theme.fontSize.keyboard)}em;
    height: ${({ theme }) => em('45px', theme.fontSize.keyboard)}em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: inherit;
    border-radius: 10px;
    cursor: pointer;
    border: 0;
    text-transform: uppercase;
    transition: 0.2s;
    transition-property: box-shadow, background-color, color;

    ${(props) =>
        props.isSelected
            ? css`
                  background-color: ${({ theme }) => theme.colors.blue};
                  box-shadow: 0 4px ${({ theme }) => theme.colors.black}80;
                  color: ${({ theme }) => theme.colors.white};
              `
            : css`
                  background-color: ${({ theme }) => theme.colors.white};
                  box-shadow: 0 4px ${({ theme }) => theme.colors.black}20;
                  color: ${({ theme }) => theme.colors.black};
              `}
`;

const KeyValue = styled.span`
    font-weight: bold;
    font-size: ${({ theme }) => em('18px', theme.fontSize.keyboard)}em;
`;
