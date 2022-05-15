import styled, { keyframes } from 'styled-components';
import { useKeys } from '../../contexts/KeysContext';

export const TextEditor = function () {
    const { keys } = useKeys();

    return (
        <TextEditorWrapper>
            <TextEditorContent>
                {keys}
                <TextEditorCursor />
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

const TextEditorCursor = styled.span`
    width: 1px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
    background: ${({ theme }) => theme.colors.black};
    animation: ${cursorBlinking} 1.5s steps(2) infinite;
`;