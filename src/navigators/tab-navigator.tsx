import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@/screens/HomeScreen";
import { TankScreen } from "@/screens/TankScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SettingScreen } from "@/screens/SettingScreen";
import { AnalysisScreen } from "@/screens/AnalysisScreen";
import { DevicesScreen } from "@/screens/DevicesScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Tank"
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
								<MaterialCommunityIcons
									name="cylinder"
									size={size}
									color={color}
								/>
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
				tabBarActiveTintColor: "#ffa500",
				tabBarInactiveTintColor: "black",
				tabBarStyle: { backgroundColor: "", elevation: 0 },
				header: () => {
					return null;
				},
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Tank" component={TankScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
			<Tab.Screen name="Analysis" component={AnalysisScreen} />
			<Tab.Screen name="Settings" component={SettingScreen} />
			<Tab.Screen name="Devices" component={DevicesScreen} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
