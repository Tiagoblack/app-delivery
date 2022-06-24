import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Swiper from 'react-native-swiper';

//import banner from '../../../utils/banner';
import api from '../../../utils/api';
import ScrollerFoot from '../../../components/ScrollerFoot';

import {
    Container,
    ContainerHeaderTitle,
    ContainerHeader,
    WrapperHeader,
    HeaderTitle,
    HeaderSubTitle,
    Icon,
    InputContainer,
    Input,
    IconSeach,
    ContainerSwiper,
    ImageSwiper,
    WrappeScroller,
} from './styled';

const BagScreen = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ContainerHeader>
                <WrapperHeader>
                    <ContainerHeaderTitle>
                        <HeaderTitle>Seja Bem-Vindo👋</HeaderTitle>
                        <HeaderSubTitle>O que deseja pra hoje?</HeaderSubTitle>
                    </ContainerHeaderTitle>
                    <Icon name="menu" onPress={navigation.toggleDrawer} />
                </WrapperHeader>
                <InputContainer>
                    <IconSeach name="search1" />
                    <Input placeholder="Digite o nome do Burger" />
                </InputContainer>
            </ContainerHeader>
            <Swiper
                style={{ height: 200, marginTop: -10 }}
                loop={true}
                autoplay
            >
                <ContainerSwiper>
                    <ImageSwiper
                        source={require('../../../assets/img/banner2.png')}
                        resizeMode="cover"
                    />
                </ContainerSwiper>
                <ContainerSwiper>
                    <ImageSwiper
                        source={require('../../../assets/img/banner4.png')}
                        resizeMode="cover"
                    />
                </ContainerSwiper>
                <ContainerSwiper>
                    <ImageSwiper
                        source={require('../../../assets/img/banner2.png')}
                        resizeMode="cover"
                    />
                </ContainerSwiper>
                <ContainerSwiper>
                    <ImageSwiper
                        source={require('../../../assets/img/banner4.png')}
                        resizeMode="cover"
                    />
                </ContainerSwiper>
            </Swiper>
            <WrappeScroller>
                {api.map((item, i) => (
                    <ScrollerFoot index={i} key={item.id} foot={item} />
                ))}
            </WrappeScroller>
        </Container>
    );
};

export default BagScreen;
