import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeatherIcon from 'react-native-vector-icons/Feather';
FeatherIcon.loadFont()

import PayButton from '../components/PayButton';

import Home from "../pages/Home";
import Wallet from "../pages/Wallet";
import Pay from "../pages/Pay";

interface ITabsProps {
  options: any,
  name: string,
  component: any
};

const Tab = createBottomTabNavigator<ITabsProps>();
const icons = {
  Home: {
    lib: FeatherIcon,
    name: "home"
  },
  Wallet: {
    lib: FeatherIcon,
    name: "credit-card"
  },
  Notifications: {
    lib: FeatherIcon,
    name: "bell"
  },
  Settings: {
    lib: FeatherIcon,
    name: "settings"
  },
}

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ size, color, focused }) => {
          if (route.name == "Pay")
            return (
              <PayButton onPress={() => navigation.navigate('Pay')} focused={focused} />
            )
          const { lib: Icon, name } = icons[route.name.toString()];
          return <Icon name={name} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)'
        },
        activeTintColor: "#FFF",
        inactiveTintColor: "#92929c"
      }}
    >
      <Tab.Screen
        options={{
          title: "Início"
        }}
        name="Home"
        component={Home}>
      </Tab.Screen>

      <Tab.Screen
        options={{
          title: "Carteira"
        }}
        name="Wallet"
        component={Wallet} />

      <Tab.Screen
        options={{
          title: ""
        }}
        name="Pay"
        component={Pay} />

      <Tab.Screen
        options={{
          title: "Notificações"
        }}
        name="Notifications"
        component={Pay} />

      <Tab.Screen
        options={{
          title: "Ajustes"
        }}
        name="Settings"
        component={Pay} />

    </Tab.Navigator>
  )
}

export default Routes;