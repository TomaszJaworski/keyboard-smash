import { useEffect, useState } from 'react';
import { KeyboardLayout } from '../KeyboardLayout';

export const KeyboardContainer = function () {
    const [clicked, setClicked] = useState<string[]>([]);

    const handleKeyDown = function (e: KeyboardEvent) {
        setClicked((prev): string[] => {
            if (prev.indexOf(e.key) !== -1) return prev;

            return [...prev, e.key];
        });
    };

    const handleKeyUp = function (e: KeyboardEvent) {
        setClicked((prev) => prev.filter((k) => k !== e.key));
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
        <div>
            <KeyboardLayout clicked={clicked} />
        </div>
    );
};
