import styled from 'styled-components';
import { Key } from '../Key';
import { getKeyboardLayout } from '../helpers/keyboardLayout';
import { em } from '../../../helpers/stylesHelpers';

interface KeyboardLayoutProps {
    clicked: string[];
}

export const KeyboardLayout = function ({ clicked }: KeyboardLayoutProps) {
    const keysLayout = getKeyboardLayout().map((row) => row.split(''));

    const renderKeyboardLayout = function () {
        return keysLayout.map((row, index) => {
            return (
                <KeyboardRow key={index}>
                    {row.map((value) => (
                        <KeyItem key={value} value={value} isSelected={clicked.includes(value)} />
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
    position: fixed;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
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
