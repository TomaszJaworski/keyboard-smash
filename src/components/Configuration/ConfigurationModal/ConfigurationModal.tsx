import { Modal } from '../../Modal/Modal';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useSetup } from '../../../contexts/SetupContext';
import { Checkbox } from '../../Forms/Checkbox';

interface ConfigurationModalProps {
    isVisible: boolean;
    toggleVisible: Dispatch<SetStateAction<boolean>>;
}

export const ConfigurationModal = function ({ isVisible, toggleVisible }: ConfigurationModalProps) {
    const { setup, setSetup } = useSetup();

    const handleChangeInput = function (e: ChangeEvent<HTMLInputElement>) {
        const { name, type, checked, value } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setSetup({
            ...setup,
            [name]: val,
        });
    };

    return (
        <Modal title="Setup" isVisible={isVisible} toggleVisibility={toggleVisible}>
            <form action="" noValidate={true}>
                <fieldset>
                    <ListWrapper>
                        <ListElement>
                            <Checkbox
                                label="Show keyboard on load"
                                name="isKeyboardVisible"
                                checked={setup.isKeyboardVisible}
                                onChange={handleChangeInput}
                            />
                        </ListElement>
                    </ListWrapper>
                </fieldset>
            </form>
        </Modal>
    );
};

const ListWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListElement = styled.li`
    margin-top: 10px;

    &:first-child {
        margin-top: 0;
    }
`;
