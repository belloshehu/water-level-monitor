import data from "../../data/chart";
import React from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	processColor,
	Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Chart({ data: dt, title }) {
	const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<View style={{ padding: 20, alignItems: "center", width: "auto" }}>
				<LineChart
					data={{
						labels: [
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
							"August",
							"September",
							"October",
							"November",
							"December",
						],
						datasets: [
							{
								data: [
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
									Math.random() * 100,
								],
							},
						],
					}}
					width={Dimensions.get("window").width * 0.98} // from react-native
					height={Dimensions.get("window").height * 0.78}
					yAxisLabel=""
					yAxisSuffix="litres"
					yAxisInterval={8} // optional, defaults to 1
					verticalLabelRotation={45}
					chartConfig={{
						backgroundColor: "#000",
						backgroundGradientFrom: "#000",
						backgroundGradientTo: "#000",
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16,
							borderColor: "#000",
						},
						propsForDots: {
							r: "6",
							strokeWidth: "1",
							stroke: "#000",
						},
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 8,
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 20,
	},
	title: {
		color: "#fff",
		textAlign: "center",
	},
	chart: {
		flex: 1,
	},
});
