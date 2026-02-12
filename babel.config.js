// module.exports = function (api) {
// 	api.cache(true);
// 	return {
// 		presets: ["babel-preset-expo"],
// 		plugins: ["react-native-reanimated/plugin"],
// 		env: {
// 			production: {
// 				plugins: ["react-native-paper/babel"],
// 			},
// 		},
// 	};
// };

module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./"],
					alias: {
						"@": "./src",
					},
				},
			],
			"react-native-reanimated/plugin", // MUST be last
		],
		env: {
			production: {
				plugins: ["react-native-paper/babel"],
			},
		},
	};
};
