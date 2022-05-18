import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Cog } from '../../../assets/cog.svg';
import { ConfigurationModal } from '../ConfigurationModal';

export const ConfigurationTrigger = function () {
    const [isVisibleModal, setVisibleModal] = useState(false);

    return (
        <>
            <ConfigurationButton onClick={() => setVisibleModal(!isVisibleModal)}>
                <CogIcon />
            </ConfigurationButton>
            <ConfigurationModal isVisible={isVisibleModal} toggleVisible={setVisibleModal} />
        </>
    );
};

const CogIcon = styled(Cog)`
    fill: ${({ theme }) => theme.colors.gray3};
`;

const ConfigurationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue};

        ${CogIcon} {
            fill: ${({ theme }) => theme.colors.white};
        }
    }
`;
