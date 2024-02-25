import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { colorTokens } from '@tamagui/themes';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue8,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -26 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Moviezine',
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favourites/index"
        options={{
          title: 'Favourite',
          drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default Layout;
