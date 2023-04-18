import React, { useCallback } from 'react';
import { 
    Box, 
    Text, 
    Center, 
    HStack,
    Image,
    ScrollView,
    Pressable
} from 'native-base';

import useFetch from '../hooks/useFetch';
import { TopAnime } from '../interfaces/TopAnime.interface';

const TopAnimePage = ({navigation}) => {
    const { data } = useFetch();

    const chunkArray = (array: any, size: number) => {
        let result = [];
        for (let i = 0; i < array.length; i += size) {
            let chunk = array.slice(i, i + size);
            result.push(chunk);
        }
        return result;
    };

    const chunkedData = chunkArray(data.data, 2);

    const handlePressAnimeItem = (item: TopAnime) => {
        navigation.navigate('Anime Page', item);
    }

    return (
        <ScrollView>
            {chunkedData.map((row, rowIndex) => (
                <HStack key={rowIndex} space={2} mb={2}>
                    {row.map((item: any, index: number) => (
                        <Pressable w="1/2" h="64" bg="red.100" key={index} onPress={() => handlePressAnimeItem(item)}>
                            <Image w="full" h="full" src={item.images.jpg.image_url} alt='anime image' style={{ position: 'relative' }}/>
                            <Box bg="blueGray.900" opacity="80" w="full" h="1/5" style={{ position: 'absolute', display: 'flex', bottom: 0}}>
                                <Text textAlign="center" opacity="100" color="white" fontWeight="semibold" style={{ zIndex: 5 }}>
                                    {item.title_english}
                                </Text>
                            </Box>
                        </Pressable>
                    ))}
                </HStack>
            ))}
        </ScrollView>
    )
}

export default TopAnimePage;
