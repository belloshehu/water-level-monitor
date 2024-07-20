import data from "../../data/chart";
import React from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	processColor,
} from "react-native";

import { BarChart } from "react-native-charts-wrapper";

export default function Chart({ data: dt, title }) {
	const barData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>Chart here</Text>}
			<View style={{ padding: 20, alignItems: "center" }}>
				<BarChart
					style={styles.chart}
					data={data}
					xAxis={10}
					animation={{ durationX: 2000 }}
					legend={"Hello"}
					gridBackgroundColor={processColor("#ffffff")}
					visibleRange={{ x: { min: 5, max: 5 } }}
					drawBarShadow={false}
					drawValueAboveBar={true}
					drawHighlightArrow={true}
					// onSelect={this.handleSelect.bind(this)}
					// highlights={this.state.highlights}
					// onChange={(event) => console.log(event.nativeEvent)}
				/>
				{/* <LineChart data={data} /> */}
				{/* <BarChart frontColor={"#177AD5"} barWidth={22} data={barData} /> */}
				{/* <BarChart
					data={data}
					barWidth={16}
					initialSpacing={10}
					spacing={14}
					barBorderRadius={4}
					showGradient
					yAxisThickness={0}
					xAxisType={"dashed"}
					xAxisColor={"lightgray"}
					yAxisTextStyle={{ color: "lightgray" }}
					stepValue={1000}
					maxValue={6000}
					noOfSections={6}
					yAxisLabelTexts={["0", "1k", "2k", "3k", "4k", "5k", "6k"]}
					labelWidth={40}
					xAxisLabelTextStyle={{ color: "lightgray", textAlign: "center" }}
					showLine
					lineConfig={{
						color: "#F29C6E",
						thickness: 3,
						curved: true,
						hideDataPoints: true,
						shiftY: 20,
						initialSpacing: -30,
					}}
				/> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	title: {
		color: "#fff",
		textAlign: "center",
	},
	chart: {
		flex: 1,
	},
});
