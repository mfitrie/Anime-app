import React, { useCallback } from 'react';
import { 
    Box, 
    Text, 
    Center, 
    HStack,
    Image,
    ScrollView,
    Pressable,
    useColorModeValue
} from 'native-base';
import LottieView from 'lottie-react-native';


import useFetch from '../hooks/useFetch';
import { TopAnime } from '../interfaces/TopAnime.interface';
import assets from '../components/animation-loading';


const TopAnimePage = ({navigation}) => {
    const { data, isLoading } = useFetch();

    const chunkArray = (array: any, size: number) => {
        let result = [];
        for (let i = 0; i < array.length; i += size) {
            let chunk = array.slice(i, i + size);
            result.push(chunk);
        }
        return result;
    };

    const chunkedData = chunkArray(data.data, 2);

    const centerBgColorModeValue = useColorModeValue('white', 'black');
    const mainBgColorModeValue = useColorModeValue('white', 'black');
    const boxBgColorModeValue = useColorModeValue("blueGray.900", 'white');
    const textColorModeValue = useColorModeValue('white', 'black');

    const handlePressAnimeItem = (item: TopAnime) => {
        navigation.navigate('Anime Page', item);
    }

    return (
        <>
            {isLoading ? (
                <Center bgColor={centerBgColorModeValue} alignItems={'center'} justifyItems={'center'} h="full">
                    <LottieView
                        autoPlay
                        loop
                        source={assets.lottieFiles.pochita}
                    />
                </Center>
            ) : (
                <ScrollView bgColor={mainBgColorModeValue}>
                    {chunkedData.map((row, rowIndex) => (
                        <HStack key={rowIndex} space={2} mb={2}>
                            {row.map((item: any, index: number) => (
                                <Pressable w="1/2" h="64" key={index} onPress={() => handlePressAnimeItem(item)}>
                                    <Image w="full" h="full" src={item.images.jpg.image_url} alt='anime image' style={{ position: 'relative' }}/>
                                    <Box bgColor={boxBgColorModeValue} opacity="80" w="full" h="1/5" style={{ position: 'absolute', display: 'flex', bottom: 0}}>
                                        <Text textAlign="center" opacity="100" color={textColorModeValue} fontWeight="semibold" style={{ zIndex: 5 }}>
                                            {item.title_english}
                                        </Text>
                                    </Box>
                                </Pressable>
                            ))}
                        </HStack>
                    ))}
                </ScrollView>
            )}
        </>
    )
}

export default TopAnimePage;
