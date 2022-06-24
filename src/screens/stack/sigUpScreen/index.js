import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../../components/CustomInput';
import {
    Container,
    ContainerLogo,
    Logo,
    LogoName,
    Decoretor,
    SubTitle,
    Space,
    ButtonSigIn,
    ButtonSigInTextBold,
    ButtonSigInText,
} from './styled';
import ButtonAction from '../../../components/ButtonAction';

const Home = () => {
    const navigation = useNavigation();
    const [secury, setSecury] = useState(false);

    const [fielEmail, setFieldEmail] = useState('');
    const [fielPassword, setFieldPassword] = useState('');
    const [fielName, setFieldName] = useState('');

    const handleClickSigIn = () => {
        if (fielEmail || fielPassword || fielName) {
            navigation.navigate('main');
        }
    };

    return (
        <Container>
            <ContainerLogo>
                <Logo>App</Logo>
                <Decoretor />
                <LogoName>Burger</LogoName>
            </ContainerLogo>
            <SubTitle>Preencha os campos para criar o seu cadastro.</SubTitle>
            <Space />
            <Input placeholder="Digite seu nome" onChangeText={setFieldName} />
            <Input
                placeholder="Digite seu email"
                onChangeText={setFieldEmail}
            />
            <Input
                placeholder="Digite sua senha"
                secureType={secury}
                icon={true}
                clickButton={() => setSecury(!secury)}
                nChangeText={setFieldPassword}
            />
            <ButtonAction text="Cadastrar" onPress={handleClickSigIn} />

            <ButtonSigIn>
                <ButtonSigInText>Já tem cadastro?</ButtonSigInText>
                <ButtonSigInTextBold>Faça login</ButtonSigInTextBold>
            </ButtonSigIn>
            <Space />
        </Container>
    );
};

export default Home;
