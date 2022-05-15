import styled, { keyframes } from 'styled-components';
import { useKeys } from '../../contexts/KeysContext';

export const TextEditor = function () {
    const { keys } = useKeys();
    const generateOutput = function (values: string[]): string {
        return values
            .map((value) => {
                let val = value;

                if (value === 'Space') {
                    val = ' ';
                } else if (value === 'Enter') {
                    val = '<br />';
                } else if (value === 'Shift') {
                    val = '';
                }

                return val;
            })
            .join('');
    };

    return (
        <TextEditorWrapper>
            <TextEditorContent>
                <TextEditorOutput dangerouslySetInnerHTML={{ __html: generateOutput(keys) }} />
            </TextEditorContent>
        </TextEditorWrapper>
    );
};

const TextEditorWrapper = styled.div`
    height: 100vh;
    background: ${({ theme }) => theme.colors.gray2};
    overflow-y: auto;
`;

const TextEditorContent = styled.div`
    max-width: 80%;
    min-height: 100%;
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    word-break: break-all;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.black}10;
`;

const cursorBlinking = keyframes`
    0% {
        opacity: 0;
    }
`;

const TextEditorOutput = styled.p`
    margin: 0;

    &::after {
        content: '';
        width: 1px;
        height: 18px;
        margin-left: 2px;
        display: inline-block;
        vertical-align: middle;
        background: ${({ theme }) => theme.colors.black};
        animation: ${cursorBlinking} 1.5s steps(2) infinite;
    }
`;
