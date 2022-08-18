import React from "react";
import { View, StyleSheet } from "react-native";

import Aleatorio from "./components/Aleatorio";
// import MinMax from "./components/MinMax";
// import CompPadrao, { Comp1, Comp2 } from "./components/Multi"
// import Primeiro from "./components/Primeiro";

export default () => {
	return (
		<View style={styles.App}>
			<Aleatorio min={1} max={60} />
			<Aleatorio min={1} max={60} />
			<Aleatorio min={1} max={60} />
			<Aleatorio min={1} max={60} />
			<Aleatorio min={1} max={60} />
			<Aleatorio min={1} max={60} />
			{/*<MinMax min={3} max={20}
			<MinMax min={3} max={20}
			<CompPadrao />
			<Comp1 />
			<Comp2 />
			<Primeiro /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	App: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})