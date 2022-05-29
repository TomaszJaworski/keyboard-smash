import React from 'react';
import styled from 'styled-components';
import { Key } from '../Key';
import { getKeyboardLayout } from '../helpers/keyboardLayout';
import { em } from '../../../helpers/stylesHelpers';
import { isSpecialKey } from '../helpers/isSpecialKey';
import { useSetup } from '../../../contexts/SetupContext';

interface KeyboardLayoutProps {
    clicked: string[];
    keyMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
    keyMouseUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LayoutComponents {
    [x: string]: any;
}

interface KeyboardInnerProps {
    isKeyboardVisible: boolean;
    size: number;
}

export const KeyboardLayout = function ({ clicked, keyMouseDown, keyMouseUp }: KeyboardLayoutProps) {
    const { setup } = useSetup();

    const detectKeyLayout = function (value: string, isSpecialSymbol: boolean) {
        const layoutComponents: LayoutComponents = {
            Space: KeySpace,
            Shift: KeyShift,
            Enter: KeyEnter,
        };

        if (isSpecialSymbol) {
            const keySymbol: string = value.replace(/%/g, '');

            if (layoutComponents[keySymbol] !== undefined) {
                return layoutComponents[keySymbol];
            }
        }

        return KeyItem;
    };

    const renderKeyboardLayout = function () {
        return getKeyboardLayout().map((row, index) => {
            return (
                <KeyboardRow key={index}>
                    {row.map((value, index) => {
                        const isSpecialSymbol = isSpecialKey(value);
                        const Tag = detectKeyLayout(value, isSpecialSymbol);
                        let val = isSpecialSymbol ? value.replace(/%/g, '') : value;

                        return (
                            <Tag
                                key={value + index}
                                value={val}
                                isSelected={clicked.includes(val)}
                                keyMouseDown={keyMouseDown}
                                keyMouseUp={keyMouseUp}
                            />
                        );
                    })}
                </KeyboardRow>
            );
        });
    };

    return (
        <KeyboardContainer
            isKeyboardVisible={setup.isKeyboardVisible}
            size={setup.keyboardSize}
            className="keyboard-container"
        >
            <KeyboardInner>{renderKeyboardLayout()}</KeyboardInner>
        </KeyboardContainer>
    );
};

const KeyboardContainer = styled.div<KeyboardInnerProps>`
    font-size: ${(props) => props.size}px;
    position: fixed;
    left: 50%;
    bottom: ${(props) => (props.isKeyboardVisible ? '40px' : '-200px')};
    transform: translateX(-50%);
    transition: bottom ${({ theme }) => theme.transition.baseTime};

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        opacity: ${(props) => (props.isKeyboardVisible ? 0 : 1)};
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 1) 100%
        );
        z-index: 10;
        transition: opacity ${({ theme }) => theme.transition.baseTime};
    }
`;

const KeyboardInner = styled.div`
    padding: ${({ theme }) => em('20px', theme.fontSize.keyboard)}em
        ${({ theme }) => em('15px', theme.fontSize.keyboard)}em;
    border-radius: 20px;
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
    margin: 0 0.3125em;
`;

const KeySpace = styled(Key)`
    width: ${({ theme }) => em('300px', theme.fontSize.keyboard)}em;
`;

const KeyShift = styled(Key)`
    width: ${({ theme }) => em('70px', theme.fontSize.keyboard)}em;

    span {
        font-size: 60%;
    }
`;

const KeyEnter = styled(Key)`
    width: ${({ theme }) => em('100px', theme.fontSize.keyboard)}em;

    span {
        font-size: 80%;
    }
`;
