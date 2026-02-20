import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Avatar = ({ url }) => {
	console.log(url);
	return (
		<Image
			source={url || require("assets/images/man.png")}
			width={40}
			height={40}
			alt="photo"
			style={styles.image}
		/>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
		width: 80,
		height: 80,
	},
});
