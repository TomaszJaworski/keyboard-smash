import styled, { css } from 'styled-components';
import { em } from '../../../helpers/stylesHelpers';

interface KeyProps {
    value: string;
    isSelected: boolean;
    className?: string;
}

interface KeyWrapperProps {
    isSelected: boolean;
}

export const Key = function ({ value, isSelected, className }: KeyProps) {
    return (
        <KeyWrapper isSelected={isSelected} className={className}>
            <KeyValue>{value}</KeyValue>
        </KeyWrapper>
    );
};

const KeyWrapper = styled.div<KeyWrapperProps>`
    width: ${({ theme }) => em('50px', theme.fontSize.keyboard)}em;
    height: ${({ theme }) => em('50px', theme.fontSize.keyboard)}em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
    transition-property: box-shadow, background-color, color;

    ${(props) =>
        props.isSelected
            ? css`
                  background-color: #96bfff;
                  box-shadow: 0 4px ${({ theme }) => theme.colors.black}80;
                  color: #fff;
              `
            : css`
                  background-color: ${({ theme }) => theme.colors.white};
                  box-shadow: 0 4px ${({ theme }) => theme.colors.black}20;
              `}
`;

const KeyValue = styled.div`
    font-weight: bold;
    font-size: ${({ theme }) => em('18px', theme.fontSize.keyboard)}em;
`;
