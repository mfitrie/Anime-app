import React, { useCallback } from 'react';
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
  Pressable,
  Text
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

//   const handlePressBackButton = useCallback(() => {
//     navigation.closeDrawer()
//   }, [navigation])
  const handlePressMainScreen = useCallback(() => {
    navigation.navigate('Main Screen');
  }, [navigation]);
  const handlePressTopAnime = useCallback(() => {
    navigation.navigate('Top Anime');
  }, [navigation]);
  const handlePressAnimePage = useCallback(() => {
    navigation.navigate('Anime Page');
  }, [navigation]);

  return (
      <VStack marginTop="40" space={5} alignItems="center">
        <Pressable h={10} onPress={handlePressMainScreen}>
            <Text fontWeight="semibold">Main Screen</Text>
        </Pressable>
        <Pressable h={10} onPress={handlePressTopAnime}>
            <Text fontWeight="semibold">Top Anime</Text>
        </Pressable>
      </VStack>
  )
}

export default Sidebar