import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/FontAwesome5";
import Calendar from "./components/Calendar";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
};

const CalendarScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Calendar />
    </View>
  );
};

const LibraryScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Library</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My Page</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="HOME"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="CALENDAR"
            component={CalendarScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="calendar-month-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="LIBRARY"
            component={LibraryScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon3 name="dumbbell" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="MY PAGE"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon2 name="person-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
