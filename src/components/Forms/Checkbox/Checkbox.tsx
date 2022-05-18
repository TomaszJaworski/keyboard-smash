import { ChangeEvent, useId } from 'react';
import styled from 'styled-components';
import checkIcon from '../../../assets/check.svg';

interface CheckboxProps {
    label: string;
    checked: boolean;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = function ({ label, checked, name, onChange }: CheckboxProps) {
    const id = useId();

    return (
        <CheckboxWrapper>
            <CheckboxLabel htmlFor={id}>
                <CheckboxInput id={id} type="checkbox" name={name} checked={checked} onChange={onChange} />
                <CheckboxInputCustom />
                <CheckboxLabelText>{label}</CheckboxLabelText>
            </CheckboxLabel>
        </CheckboxWrapper>
    );
};

const CheckboxWrapper = styled.div``;

const CheckboxInputCustom = styled.span`
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray3};
`;

const CheckboxLabel = styled.label`
    display: flex;
    cursor: pointer;
`;

const CheckboxLabelText = styled.span`
    padding-left: 15px;
`;

const CheckboxInput = styled.input`
    position: absolute;
    left: -9999px;

    &:checked {
        + ${CheckboxInputCustom} {
            background: url('${checkIcon}') no-repeat center center / 90% auto;
        }
    }

    &:focus {
        + ${CheckboxInputCustom} {
            border-color: ${({ theme }) => theme.colors.blue};
        }
    }
`;
