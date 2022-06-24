import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { useColorScheme, ActivityIndicator } from 'react-native';
import { GlobalContext } from './src/UserContext/index';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import MainStack from './src/routes/MainStack';

import themes from './src/style/theme';
import { useEffect } from 'react';

export default function App() {
    // let [loaded] = useFonts({
    //     Calistoga: require('./src/assets/fonts/Calistoga-Regular.ttf'),
    // });

    // if (!loaded) {
    //     return <ActivityIndicator />;
    // }

    return (
        <NavigationContainer>
            <ThemeProvider theme={themes[useColorScheme()] || themes}>
                <GlobalContext>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="#E5E5E5"
                    />
                    <MainStack />
                </GlobalContext>
            </ThemeProvider>
        </NavigationContainer>
    );
}
