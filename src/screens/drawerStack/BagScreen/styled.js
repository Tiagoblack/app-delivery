import styled from 'styled-components/native';
import { Entypo, AntDesign } from '@expo/vector-icons';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${(props) => props.theme.background};
`;
export const ContainerHeaderTitle = styled.View``;

export const ContainerHeader = styled.View`
    height: 250px;
    padding: 70px 24px;
`;

export const WrapperHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    font-weight: bold;
    font-size: 30px;
`;

export const HeaderSubTitle = styled.Text`
    color: ${(props) => props.theme.label};
`;

export const Icon = styled(Entypo)`
    font-size: 32px;
    color: ${(props) => props.theme.primary};
`;

export const InputContainer = styled.View`
    width: 100%;
    height: 52px;
    background-color: #fff;
    flex-direction: row;
    margin: 28px 0px;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    border-radius: 10px;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#979797',
})`
    width: 100%;
    height: 100%;
    padding: 0px 8px;
`;
export const IconSeach = styled(AntDesign)`
    font-size: 24px;
    color: ${(props) => props.theme.primary};
`;

export const ContainerSwiper = styled.View`
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
`;
export const ImageSwiper = styled.Image`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const WrappeScroller = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    flex: 1;
    padding: 0px 24px 40px 24px;
`;
