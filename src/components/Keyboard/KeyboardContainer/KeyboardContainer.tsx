import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KeyboardLayout } from '../KeyboardLayout';

export const KeyboardContainer = function () {
    const [clicked, setClicked] = useState<string[]>([]);

    /**
     * Wrapper for 'clicked' useState. Add to array only unique elements
     */
    const addClickedElement = function (value: string) {
        setClicked((prev): string[] => {
            if (prev.indexOf(value) !== -1) return prev;

            return [...prev, value];
        });
    };

    /**
     * Wrapper for 'clicked' useState. Remove for array specifed element
     */
    const removeClickedElement = function (value: string) {
        setClicked((prev) => prev.filter((k) => k !== value));
    };

    const handleKeyDown = function (e: KeyboardEvent) {
        addClickedElement(e?.key);
    };

    const handleKeyUp = function (e: KeyboardEvent) {
        removeClickedElement(e?.key);
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
