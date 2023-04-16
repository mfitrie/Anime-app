import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from "./screens/main-screen";
import TopAnimeScreen from "./screens/top-anime";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <Drawer.Navigator initialRouteName="Main Screen" useLegacyImplementation={true}>
            <Drawer.Screen name="Main Screen" component={MainScreen} />
            <Drawer.Screen name="Top Anime" component={TopAnimeScreen} />
        </Drawer.Navigator>
    )
}

export default App;