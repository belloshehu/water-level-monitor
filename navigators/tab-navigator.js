import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { TankScreen } from "../screens/TankScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { SettingScreen } from "../screens/SettingScreen";
import { AnalysisScreen } from "../screens/AnalysisScreen";
import { DevicesScreen } from "../screens/DevicesScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Profile":
              iconName = "user";
              break;
            case "Tank":
              return (
                <FontAwesome6 name="glass-water" size={size} color={color} />
              );
            case "Settings":
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              );
            case "Analysis":
              return (
                <MaterialIcons name="analytics" size={size} color={color} />
              );

            case "Devices":
              return <MaterialIcons name="devices" size={size} color={color} />;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { backgroundColor: "#ffa500", elevation: 5 },
        header: () => {
          return null;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tank" component={TankScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Analysis" component={SettingScreen} />
      <Tab.Screen name="Settings" component={AnalysisScreen} />
      <Tab.Screen name="Devices" component={DevicesScreen} />
    </Tab.Navigator>
  );
};
