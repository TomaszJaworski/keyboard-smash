import { ReactNode } from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
}

export const ActionButton = function ({ onClick, children, className }: ActionButtonProps) {
    return (
        <ActionButtonWrapper className={className} onClick={onClick}>
            {children}
        </ActionButtonWrapper>
    );
};

const ActionButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    transition: background-color ${({ theme }) => theme.transition.baseTime};

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue};

        svg {
            fill: ${({ theme }) => theme.colors.white};
        }
    }

    svg {
        fill: ${({ theme }) => theme.colors.gray3};
        transition: fill ${({ theme }) => theme.transition.baseTime};
    }
`;
