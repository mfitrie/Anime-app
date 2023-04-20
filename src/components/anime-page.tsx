import React from 'react';
import { Text, Image, Box, VStack, HStack, ScrollView, Heading, useColorModeValue } from 'native-base';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { Datum } from '../interfaces/TopAnime.interface';

const AnimePage = ({navigation, route}) => {
    const { images, status, producers, demographics, themes, studios, rating, broadcast, title_english, title_japanese, score, synopsis, genres }: Datum = route.params;
    const joinListName = (list) => list.map(item => item.name).join(', ');

    return (
        <ScrollView bgColor={useColorModeValue('white', 'black')}>
            <Image h="56" mb={5} src={ images.jpg.large_image_url } alt='anime image'/>
            <Box p={2} pb={5}>
                <Heading>{ title_english }</Heading>
                <Heading size="sm" mb={5}>{ title_japanese }</Heading>
                <VStack mb={8}>
                    <HStack>
                        <Text w='2/3'>Genres: { joinListName(genres) }</Text>
                        <HStack space={1} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} w='1/3'>
                            <Text>Score: </Text>
                            <Text bold fontSize="md">{ score }</Text>
                        </HStack>
                    </HStack>
                    { demographics.length === 0 ? '' : <Text>Demographic: { joinListName(demographics) }</Text>}
                    <Text>Status: { status }</Text>
                    <Text>Rating: { rating }</Text>
                    <Text>Broadcast: { broadcast.string }</Text>
                    <Text>Producers: { joinListName(producers) }</Text>
                    <Text>Studio: { joinListName(studios) }</Text>
                    <Text>Themes: { joinListName(themes) }</Text>
                </VStack>
                <Text>{ synopsis }</Text>
            </Box>
        </ScrollView>
    )
}

export default AnimePage;