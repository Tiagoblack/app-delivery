import React from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
    margin-bottom: 16px;
    background-color: #f9f9fb;
    height: 52px;
    width: 100%;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;
`;
const Input = styled.TextInput`
    height: 100%;
    width: 80%;
`;

const Icon = styled(Entypo)`
    color: ${(props) => props.theme.text};
    opacity: 0.5;
    font-size: 24px;
`;
const CustomInput = ({ icon, secureType, clickButton, ...rest }) => {
    return (
        <Container>
            <Input secureTextEntry={secureType} {...rest} />
            {icon &&
                (secureType ? (
                    <Icon onPress={clickButton} name="eye" />
                ) : (
                    <Icon onPress={clickButton} name="eye-with-line" />
                ))}
        </Container>
    );
};

export default CustomInput;
