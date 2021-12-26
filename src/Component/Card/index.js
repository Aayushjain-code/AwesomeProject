import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ToastAndroid, Button, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Screen = ({ imageURL, caption, discountedPrice, realPrice }) => {
	const [Enable, setEnable] = useState("courses");
	const showToast = () => {
		ToastAndroid.show("Congratulations! Order Placed Successfully", ToastAndroid.SHORT);
	};
	return (
		<View style={styles.screen} >
			{/* Render Product Component here */}
			<View style={styles.root}>
				<Image style={styles.image} source={{ uri: imageURL }} />
				<View style={styles.ratingContainer}>
					<Text style={{ fontWeight: 'bold', color: '#000' }}>Ratings: </Text>
					<FontAwesome name="star" size={20} color="#FFD700" />
					<FontAwesome name="star" size={20} color="#FFD700" />
					<FontAwesome name="star" size={20} color="#FFD700" />
					<FontAwesome name="star" size={20} color="#FFD700" />
					<FontAwesome name="star-half-full" size={20} color="#FFD700" />
				</View>
				<View style={styles.productDetails}>
					<View>
						<Text style={styles.heading} numberOfLines={2} >{caption}</Text>
					</View>
					{/* Price */}
					<View style={styles.priceFont}>

						<Text style={styles.price1}>
							₹{discountedPrice}/-
						</Text>
						<Text style={styles.price2}>
							₹{realPrice}/-
						</Text>


					</View>
				</View>

				<View style={styles.controls}>
					<View style={styles.container}>
						<Picker
							selectedValue={Enable}
							style={{ height: 10, width: 150, }}
							mode={"dialog"}
							onValueChange={(itemValue) => setEnable(itemValue)}
						>
							<Picker.Item label="1 for ₹50/- " />
							<Picker.Item label="2 for ₹95/-" />
							<Picker.Item label="3 for ₹140/-" />
						</Picker>
					</View>

					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle2} onPress={() => showToast()}>
						<View style={styles.buttonStyle} style={{ flexDirection: 'row' }}>
							<FontAwesome name="cart-arrow-down" size={20} color="#000000" style={{ marginRight: 8 }} />
							<Text style={{ marginRight: 2, fontWeight: 'bold' }}>कार्ट में जोड़ें </Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#E20147',
		borderRadius: 5,
		marginLeft: 5,

	},
	newButtonStyle: {
		backgroundColor: 'green',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	newButtonStyle2: {
		backgroundColor: '#E20147',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	ratingContainer: {
		marginLeft: 15,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	quantityButton: {
		paddingLeft: 10,
		height: 40,
		width: 120,
		fontSize: 25
	},
	quantity: {
		paddingLeft: 20,
		paddingBottom: 20
	},
	buttonStyle: {
	},
	controls: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	price1: {
		marginLeft: 8,
		marginTop: 10,
		padding: 3,
		fontSize: 20,
		backgroundColor: '#ffd700',
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		borderRadius: 5,
	},
	price2: {
		marginTop: 18,
		marginLeft: 10,
		fontWeight: 'bold',
		color: 'black',
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
		fontSize: 16
	},
	priceFont: {
		flexDirection: 'row',

	},
	screen: {
		width: 300,
		height: '100%',
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	root: {
		marginLeft: 10,
		borderWidth: 2,
		marginTop: 10,
		backgroundColor: '#fff',
		borderRadius: 5,

	},
	image: {
		marginLeft: 50,
		width: 150,
		height: 150,
	},
	productDetails: {
		padding: 10,
	},
	heading: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#000000',
		backgroundColor: 'yellow',
		padding: 5,
	},


})

export default Screen
