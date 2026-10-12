
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Library from "../screens/Library";
import Create from "../screens/Create";
import Details from "../screens/Details";

import type { RootStackParamList, TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
      backgroundColor: "#161616",
      borderTopColor: "#292929",
      height: 60,
      paddingTop: 6,
      paddingBottom: 5, },

      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "#aaa",
      tabBarShowLabel: false,
      tabBarIcon: ({ color, size, focused }) => {
          
let iconName: keyof typeof Ionicons.glyphMap;

if (route.name === "Home") {
      iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Create") {
      iconName = focused ? "play-circle" : "play-circle-outline";
      } else {
      iconName = focused ? "person-circle" : "person-circle-outline";

}

return (
      <Ionicons name={iconName} size={size + 5} color={color} />);},})}>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>

  
);

}

export default function AppNav() {
return (
     <NavigationContainer>
     <Stack.Navigator
     initialRouteName="MainTabs"
     screenOptions={{
     headerStyle: { backgroundColor: "#0f0f0f" },
     headerTintColor: "#fff",
     contentStyle: { backgroundColor: "#0f0f0f" },}}>

<Stack.Screen
     name="MainTabs"
     component={MainTabs}
     options={{ headerShown: false }}/>

<Stack.Screen
     name="Details"
     component={Details}
     options={{ title: "Video" }}/>
     </Stack.Navigator>
     </NavigationContainer>

);

}
