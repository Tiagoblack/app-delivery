import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.background};
    padding: 24px;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Text`
    font-weight: bold;
    font-size: 36px;
    color: ${(props) => props.theme.text};
`;
export const LogoName = styled.Text`
    font-weight: bold;
    font-size: 36px;
    color: ${(props) => props.theme.text};
`;
export const ContainerLogo = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
`;
export const Decoretor = styled.View`
    background-color: ${(props) => props.theme.primary};
    height: 16px;
    width: 16px;
    border-radius: 16px;
    margin: 0px 8px;
`;

export const SubTitle = styled.Text`
    color: ${(props) => props.theme.textBold};
    opacity: 0.8;
    font-size: 24px;
    text-align: center;
    line-height: ${1.4 * 18}px;
    font-weight: 400;
    margin-bottom: 16px;
`;

export const Space = styled.View`
    background-color: ${(props) => props.theme.primary};
    height: 2px;
    width: 80%;
    margin: 20px 0px;
`;
// export const ContainerInput = styled.View`
//     width: 100%;
//     justify-content: center;
//     align-items: center;
//     /* height: 400px; */
//     flex: 1;
//     border-top-style: solid;
//     border-top-width: ${StyleSheet.hairlineWidth}px;
//     border-top-color: #e2e2e2;
//     background-color: red;

//     border-bottom-style: solid;
//     border-bottom-width: ${StyleSheet.hairlineWidth}px;
//     border-bottom-color: #e2e2e2;
// `;

export const ButtonSigIn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
`;
export const ButtonSigInTextBold = styled.Text`
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 16px;
`;
export const ButtonSigInText = styled.Text`
    margin-right: 4px;
    color: ${(props) => props.theme.text};
    font-size: 16px;
`;

export const ButtonOutline = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.primary};
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 100%;
    margin-top: 30px;
    border-radius: 10px;
`;
export const ButtonOutlineText = styled.Text`
    color: #fff;
    font-size: 17px;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
`;
