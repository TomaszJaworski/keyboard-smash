import React from 'react';
import styled from 'styled-components';
import { Key } from '../Key';
import { getKeyboardLayout } from '../helpers/keyboardLayout';
import { em } from '../../../helpers/stylesHelpers';

interface KeyboardLayoutProps {
    clicked: string[];
    keyMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
    keyMouseUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const KeyboardLayout = function ({ clicked, keyMouseDown, keyMouseUp }: KeyboardLayoutProps) {
    const keysLayout = getKeyboardLayout().map((row) => row.split(''));

    const renderKeyboardLayout = function () {
        return keysLayout.map((row, index) => {
            return (
                <KeyboardRow key={index}>
                    {row.map((value) => (
                        <KeyItem
                            key={value}
                            value={value}
                            isSelected={clicked.includes(value)}
                            keyMouseDown={keyMouseDown}
                            keyMouseUp={keyMouseUp}
                        />
                    ))}
                </KeyboardRow>
            );
        });
    };

    return <KeyboardWrapper>{renderKeyboardLayout()}</KeyboardWrapper>;
};

const KeyboardWrapper = styled.div`
    padding: ${({ theme }) => em('20px', theme.fontSize.keyboard)}em
        ${({ theme }) => em('15px', theme.fontSize.keyboard)}em;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.keyboard};
    background-color: ${({ theme }) => theme.colors.gray};
`;

const KeyboardRow = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const KeyItem = styled(Key)`
    margin: 0 5px;
`;
