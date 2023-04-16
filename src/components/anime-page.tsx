import React from 'react';
import { Text } from 'native-base';

const AnimePage = ({ navigation, route }) => {
    return (
        <Text>This is {route.params.name}</Text>
    )
}

export default AnimePage;