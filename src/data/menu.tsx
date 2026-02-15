import {
	MaterialIcons,
	Ionicons,
	Entypo,
	AntDesign,
	FontAwesome,
} from "@expo/vector-icons";

export const menuItems = [
	{
		title: "View level",
		icon: <FontAwesome name="battery" size={34} color="black" />,
		url: "Tank",
	},
	{
		title: "Analysis",
		icon: <MaterialIcons name="analytics" size={34} color="black" />,
		url: "Analysis",
	},
	{
		title: "Power usage",
		icon: <Entypo name="power-plug" size={34} color="black" />,
		url: "Power",
	},
	{
		title: "Settings",
		icon: <Ionicons name="settings-outline" size={34} color="black" />,
		url: "Settings",
	},
	{
		title: "Profile",
		icon: <AntDesign name="user" size={34} color="black" />,
		url: "Profile",
	},
	{
		title: "Devices",
		icon: <MaterialIcons name="devices" size={34} color="black" />,
		url: "Devices",
	},
	{
		title: "Info",
		icon: <Entypo name="info-with-circle" size={34} color="black" />,
		url: "Devices",
	},
];
