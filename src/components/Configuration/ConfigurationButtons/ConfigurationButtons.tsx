import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ConfigurationModal } from '../ConfigurationModal';
import { ActionButton } from '../../ActionButton';
import { ReactComponent as Cog } from '../../../assets/cog.svg';
import { ReactComponent as FullScreen } from '../../../assets/fullscreen.svg';

export const ConfigurationButtons = function () {
    const [isVisibleModal, setVisibleModal] = useState(false);
    const [isFullScreen, setFullscreen] = useState(false);

    const handleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen().then(() => setFullscreen(false));
        } else {
            document.documentElement.requestFullscreen().then(() => setFullscreen(true));
        }
    };

    useEffect(() => {
        const handleFullscreen = () => {
            if (document.fullscreenElement === null) {
                setFullscreen(false);
            }
        };

        document.documentElement.addEventListener('fullscreenchange', handleFullscreen);

        return () => {
            document.documentElement.removeEventListener('fullscreenchange', handleFullscreen);
        };
    }, []);

    return (
        <ConfigurationButtonsWrapper>
            <CustomActionButton onClick={handleFullScreen}>
                <FullScreen />
            </CustomActionButton>
            <CustomActionButton onClick={() => setVisibleModal(!isVisibleModal)}>
                <Cog />
            </CustomActionButton>
            <ConfigurationModal isVisible={isVisibleModal} toggleVisible={setVisibleModal} />
        </ConfigurationButtonsWrapper>
    );
};

const CustomActionButton = styled(ActionButton)`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`;

const ConfigurationButtonsWrapper = styled.div`
    display: flex;
    position: absolute;
    right: 20px;
    top: 20px;
`;
