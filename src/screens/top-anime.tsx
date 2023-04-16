import React from 'react';
import { 
    Box, 
    Text, 
    Center, 
    HStack,
    Image,
    ScrollView
} from 'native-base';

import useFetch from '../hooks/useFetch';

const TopAnime = () => {
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

    return (
        <ScrollView>
            {chunkedData.map((row, rowIndex) => (
                <HStack key={rowIndex} space={2} mb={2}>
                    {row.map((item: any, index: number) => (
                        <Box key={index} w="1/2" h="64" bg="red.100">
                            <Image w="full" h="full" src={item.images.jpg.image_url} alt='anime image' style={{ position: 'relative' }}/>
                            <Text bg="orange.400" w="full" h="1/5" textAlign="center" style={{ position: 'absolute', display: 'flex', bottom: 0}}>
                                {item.title_english}
                            </Text>
                        </Box>
                    ))}
                </HStack>
            ))}
        </ScrollView>
    )
}

export default TopAnime;
