import React, { useCallback } from 'react';
import {
  HStack,
  VStack,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
  Pressable,
  Text,
  Switch,
  useColorMode,
  Box,
  Center
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const { colorMode, toggleColorMode } = useColorMode();

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
      <Center h="full" bgColor={useColorModeValue('white', 'black')}>
        <VStack space={5} color={useColorModeValue('black', 'white')} alignItems="center">
          <Pressable h={10} onPress={handlePressMainScreen}>
              <Text fontWeight="semibold">Main Screen</Text>
          </Pressable>
          <Pressable h={10} onPress={handlePressTopAnime}>
              <Text fontWeight="semibold">Top Anime</Text>
          </Pressable>
          <HStack space={2} alignItems={'center'}>
            <Text>Light</Text>
            <Switch onToggle={toggleColorMode} isChecked={colorMode === 'dark'}/>
            <Text>Dark</Text>
          </HStack>
        </VStack>
      </Center>
  )
}

export default Sidebar