import styled from 'styled-components';

interface KeyProps {
    value: string;
}

export const Key = function ({ value }: KeyProps) {
    return (
        <KeyWrapper>
            <KeyValue>{value}</KeyValue>
        </KeyWrapper>
    );
};

const KeyWrapper = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px #00000020;
`;

const KeyValue = styled.div`
    font-weight: bold;
    font-size: 18px;
`;
