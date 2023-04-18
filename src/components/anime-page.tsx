import React from 'react';
import { Text, Image, Box, VStack, HStack, ScrollView, Heading } from 'native-base';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { Datum } from '../interfaces/TopAnime.interface';

const AnimePage = ({navigation, route}) => {
    const { images, title_english, synopsis }: Datum = route.params;

    return (
        <ScrollView>
            <Image h="56" mb={5} src={ images.jpg.large_image_url } alt='anime image'/>
            <Box p={2} pb={5}>
                <Heading mb={5}>{ title_english }</Heading>
                <Text>{ synopsis }</Text>
            </Box>
        </ScrollView>
    )
}

export default AnimePage;