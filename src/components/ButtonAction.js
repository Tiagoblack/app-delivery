import React from 'react';
import styled from 'styled-components/native';

const ContainerButton = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    height: 52px;
    border-radius: 10px;
`;
const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export default ({ text, ...rest }) => {
    return (
        <ContainerButton {...rest}>
            <TextButton>{text}</TextButton>
        </ContainerButton>
    );
};
