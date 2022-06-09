import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { useKeys } from '../../../contexts/KeysContext';

interface Boxes {
    index: number;
    value: string;
}

export const BoxContainer = function () {
    const { keys } = useKeys();
    const [boxes, setBoxes] = useState<Boxes[]>([]);

    useEffect(() => {
        const newKeys = keys.slice(boxes.length).map((key, index) => ({
            index: boxes.length + index,
            value: key,
        }));

        setBoxes((prev) => prev.concat(newKeys));
    }, [keys]);

    const onBoxAnimationEnd = useCallback(($node: HTMLDivElement, index: number) => {
        if (!$node) return;
    }, []);

    return (
        <BoxContainerWrapper>
            {boxes.map(({ index, value }) => (
                <Box key={index} index={index} value={value} onComplete={onBoxAnimationEnd} />
            ))}
        </BoxContainerWrapper>
    );
};

const BoxContainerWrapper = styled.div``;
