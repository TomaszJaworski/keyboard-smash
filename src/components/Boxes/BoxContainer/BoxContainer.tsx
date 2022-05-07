import { useEffect } from 'react';
import { Box } from '../Box';
import { useKeys } from '../../../contexts/KeysContext';

export const BoxContainer = function () {
    const { keys } = useKeys();

    useEffect(() => {
        console.log('effect', keys);
    }, [keys]);

    return (
        <div>
            Box Container
            <Box value="D" />
        </div>
    );
};
