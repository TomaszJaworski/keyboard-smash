import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KeyboardLayout } from '../KeyboardLayout';
import { useKeys } from '../../../contexts/KeysContext';
import { getKeyboardFlatLayout } from '../helpers/keyboardLayout';

export const KeyboardContainer = function () {
    const [clicked, setClicked] = useState<string[]>([]);
    const { setKeys } = useKeys();

    /**
     * Wrapper for 'clicked' useState. Add to array only unique elements
     */
    const addClickedElement = function (value: string) {
        setClicked((prev) => {
            if (prev.indexOf(value) !== -1) return prev;

            return [...prev, value];
        });
    };

    /**
     * Wrapper for 'clicked' useState. Remove from array specified element
     */
    const removeClickedElement = function (value: string) {
        setClicked((prev) => prev.filter((k) => k !== value));
    };

    const handleKeyDown = function (e: KeyboardEvent) {
        let key = e?.key;

        if (key === ' ') {
            // using event.key "Space" is returned as " "
            key = 'Space';
        }

        if (!getKeyboardFlatLayout().includes(key)) {
            // return if keycode is out of scope
            return;
        }

        addClickedElement(key);
    };

    const handleKeyUp = function (e: KeyboardEvent) {
        let key = e?.key;

        if (key === ' ') {
            // using event.key "Space" is returned as " "
            key = 'Space';
        }

        removeClickedElement(key);
    };

    const handleMouseDown = function (e: React.MouseEvent<HTMLButtonElement>) {
        const value = e.currentTarget.getAttribute('data-value');

        if (!value) return;

        addClickedElement(value);
    };

    const handleMouseup = function (e: React.MouseEvent<HTMLButtonElement>) {
        const value = e.currentTarget.getAttribute('data-value');

        if (!value) return;

        removeClickedElement(value);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        if (clicked.length === 1) {
            // update global keys only with one item at a time.
            // Where user clicked more than 1 key at a time there may be a bugs
            setKeys((prev) => [...prev, ...clicked]);
        }
    }, [clicked]);

    return (
        <KeyboardContainerWrapper>
            <KeyboardLayout clicked={clicked} keyMouseDown={handleMouseDown} keyMouseUp={handleMouseup} />
        </KeyboardContainerWrapper>
    );
};

const KeyboardContainerWrapper = styled.div`
    position: fixed;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
`;
