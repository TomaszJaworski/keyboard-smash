import { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as X } from '../../assets/x.svg';
import { Portal } from './Portal';

export interface Props {
    width?: number;
    isVisible: boolean;
    title?: string;
    toggleVisibility: (value: boolean) => void;
    children: ReactNode;
    testId?: string;
}

interface ModalContentProps {
    width?: number;
}

function Modal(props: Props) {
    const { width = 800, isVisible = false, title = '', toggleVisibility, children, testId = null } = props;
    const $modal = useRef<HTMLDivElement>(null);

    const handleClosePopup = () => {
        toggleVisibility(false);
    };

    return (
        <Portal>
            <CSSTransition in={isVisible} classNames="fade" timeout={200} unmountOnExit>
                <ModalWrapper ref={$modal} data-testid={testId}>
                    <ModalInner>
                        <ModalContent width={width}>
                            {title.length > 0 && (
                                <ModalTitle>
                                    <h2>{title}</h2>
                                </ModalTitle>
                            )}
                            <ModalClose onClick={handleClosePopup} aria-label="Toggle visibility">
                                <XIcon />
                            </ModalClose>

                            {children}
                        </ModalContent>
                    </ModalInner>
                    <ModalBackground />
                </ModalWrapper>
            </CSSTransition>
        </Portal>
    );
}

export { Modal };

const ModalWrapper = styled.div`
    overflow-y: auto;
    text-align: center;
    position: fixed;
    inset: 0;
    z-index: 100;
    transition: opacity 0.2s;

    &.fade-enter {
        opacity: 0;
    }

    &.fade-enter-active {
        opacity: 1;
    }

    &.fade-exit {
        opacity: 1;
    }

    &.fade-exit-active {
        opacity: 0;
    }
`;

const ModalInner = styled.div`
    height: 100%;

    &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        width: 0;
    }
`;

const ModalContent = styled.div<ModalContentProps>`
    width: 100%;
    max-width: ${(props) => props.width}px;
    display: inline-block;
    vertical-align: middle;
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
    z-index: 1;
`;

const ModalTitle = styled.div`
    padding: 0 0 30px;

    h2 {
        margin: 0;
        line-height: 1.2;
    }
`;

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
`;

const XIcon = styled(X)`
    fill: ${({ theme }) => theme.colors.gray3};
`;

const ModalClose = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gray2} no-repeat center center / 20px;
    transition: 0.2s;
    transition-property: background-color;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue};

        ${XIcon} {
            fill: ${({ theme }) => theme.colors.white};
        }
    }
`;
