import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';
import { DrawerToggleButton } from '@react-navigation/drawer';

const _layout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.blue8.get(),
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Movizine', headerLeft: () => <DrawerToggleButton  tintColor='white'/> }}
      />
      <Stack.Screen
        name="movie/[id]"
        options={{ title: ''}}
      />
    </Stack>
  );
};

export default _layout;
