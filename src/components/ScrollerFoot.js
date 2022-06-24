import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const newWidth = Math.floor(width);

const Container = styled.TouchableOpacity`
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    height: 200px;
    border-radius: 10px;
`;
const ImageFoot = styled.Image`
    height: 120px;
    width: 100%;
`;
const Label = styled.Text`
    margin-top: 4px;
    text-align: left;
    color: ${(props) => props.theme.text};
`;
const FootNameBold = styled.Text`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;
const Price = styled.Text`
    font-weight: 600;
    font-size: 15px;
    color: ${(props) => props.theme.primary};
`;

const ScrollerFoot = ({ foot, index }) => {
    return (
        <Container
            style={[
                styles.container,
                { marginRight: index % 2 == 0 ? 10 : null },
            ]}
        >
            <ImageFoot resizeMode="cover" source={foot.img} />
            <Label>Tradicional</Label>
            <FootNameBold>{foot.name}</FootNameBold>
            <Price>{foot.price}</Price>
        </Container>
    );
};

export default ScrollerFoot;
const styles = StyleSheet.create({
    container: {
        width: newWidth / 2 - 34,
    },
});
