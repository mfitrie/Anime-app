import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from "./components/sidebar";
import MainScreen from "./screens/main-screen";
import TopAnimeScreen from "./screens/top-anime";
import AnimePage from "./components/anime-page";


const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Top Anime"
            drawerContent={props => <Sidebar {...props} />} 
            useLegacyImplementation={true}
        >
            <Drawer.Screen name="Main Screen" component={MainScreen} />
            <Drawer.Screen name="Top Anime" component={TopAnimeScreen} />
            <Drawer.Screen name="Anime Page" component={AnimePage}/>
        </Drawer.Navigator>
    )
}

export default App;