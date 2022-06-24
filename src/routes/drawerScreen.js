import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import BagScreen from '../screens/drawerStack/BagScreen';
import ConfigScreen from '../screens/drawerStack/ConfigScreen';
import FavoritesScreen from '../screens/drawerStack/FavoritesScreen';
import FootScreen from '../screens/drawerStack/FootScreen';
import ShoppingScreen from '../screens/drawerStack/ShoppingScreen';

import DrawerCustom from '../components/DrawerCustom';

export default () => {
    return (
        <Drawer.Navigator
            initialRouteName="bag"
            drawerContent={(props) => <DrawerCustom {...props} />}
        >
            <Drawer.Screen
                name="bag"
                component={BagScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen name="config" component={ConfigScreen} />
            <Drawer.Screen name="favorites" component={FavoritesScreen} />
            <Drawer.Screen name="foot" component={FootScreen} />
            <Drawer.Screen name="shopping" component={ShoppingScreen} />
        </Drawer.Navigator>
    );
};
