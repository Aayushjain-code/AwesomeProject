import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const screen1 = () => {
	return (
		<View style={styles.screen} >
			{/* Render Product Component here */}
			<View style={styles.root}>
				<Image style={styles.image} source={{ uri: 'https://5.imimg.com/data5/GI/HK/LA/SELLER-7711771/zandu-balm-500x500.jpg' }} />
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
						<Text style={styles.heading} numberOfLines={2}>झंडू बाम | प्राकृतिक रूप से दर्द में आराम</Text>
					</View>
					{/* Price */}
					<View style={styles.priceFont}>

						<Text style={styles.price1}>
							₹50/-
						</Text>
						<Text style={styles.price2}>
							60/-
						</Text>


					</View>
				</View>

				<View style={styles.controls}>
					{/* <TouchableHighlight style={styles.quantityButton}>

						<Button style={styles.buttonStyle} title='ख़रीदे' color='#E20147' />
					</TouchableHighlight> */}

					{/* <TouchableHighlight style={styles.quantityButton}>
						<Button style={styles.buttonStyle} title='कार्ट में जोड़ें' />
					</TouchableHighlight> */}
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle} >
						<View style={styles.buttonStyle} style={{ flexDirection: 'row' }}>
							<FontAwesome name="money" size={20} color="#000000" style={{ marginRight: 8 }} />
							<Text style={{ marginRight: 8, fontWeight: 'bold' }} >ख़रीदे</Text>

						</View>
					</TouchableHighlight>
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle2} >
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
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	root: {
		marginLeft: 50,
		borderWidth: 2,
		marginTop: 250,
		backgroundColor: '#fff',
		borderRadius: 5,

	},
	image: {
		alignItems: 'center',
		width: 250,
		height: 180,
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

export default screen1
