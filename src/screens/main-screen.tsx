import React from 'react';
import { Center, Box, Text } from 'native-base';
import LottieView from 'lottie-react-native';
import assets from '../components/animation-loading';


const MainScreen = () => {
    return (
        <Center alignItems={'center'} justifyItems={'center'} h="full">
            <LottieView
                autoPlay
                loop
                source={assets.lottieFiles.pochita}
            />
        </Center>
    )
}

export default MainScreen;