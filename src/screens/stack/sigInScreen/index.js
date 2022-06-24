import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../../../components/CustomInput';
import {
    Container,
    ContainerInput,
    ContainerLogo,
    Logo,
    LogoName,
    Decoretor,
    SubTitle,
    Space,
    ButtonSigIn,
    ButtonSigInTextBold,
    ButtonSigInText,
    ButtonOutline,
    ButtonOutlineText,
} from './styled';
import ButtonAction from '../../../components/ButtonAction';

const Home = () => {
    const navigation = useNavigation();

    const [secury, setSecury] = useState(false);
    const [fielEmail, setFieldEmail] = useState('');
    const [fielPassword, setFieldPassword] = useState('');
    const handleClickSinUp = () => {
        if (fielEmail || fielPassword) {
            navigation.navigate('sigup');
        }
    };

    return (
        <Container>
            <ContainerLogo>
                <Logo>App</Logo>
                <Decoretor />
                <LogoName>Burger</LogoName>
            </ContainerLogo>
            <SubTitle>Use suas credenciais para realizar o login.</SubTitle>
            <Space />
            <Input
                placeholder="Digite seu email"
                onChangeText={setFieldEmail}
            />
            <Input
                placeholder="Digite sua senha"
                secureType={secury}
                icon={true}
                clickButton={() => setSecury(!secury)}
                onChangeText={setFieldPassword}
            />
            <ButtonAction text="Entrar" onPress={handleClickSinUp} />

            <ButtonSigIn>
                <ButtonSigInText>Esqueceu sua senha?</ButtonSigInText>
                <ButtonSigInTextBold>Clique aqui</ButtonSigInTextBold>
            </ButtonSigIn>
            <Space />

            <ButtonOutline>
                <ButtonOutlineText>Quero me cadastrar</ButtonOutlineText>
            </ButtonOutline>
        </Container>
    );
};

export default Home;
