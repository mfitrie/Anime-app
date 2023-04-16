import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from "./screens/main-screen";
import TopAnimeScreen from "./screens/top-anime";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <Drawer.Navigator initialRouteName="Main" useLegacyImplementation={true}>
            <Drawer.Screen name="Main" component={MainScreen} />
            <Drawer.Screen name="TopAnime" component={TopAnimeScreen} />
        </Drawer.Navigator>
    )
}

export default App;