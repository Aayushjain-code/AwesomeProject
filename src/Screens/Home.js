import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Screen from '../Component/Card'

const data = [
	{
		imageURL: "https://5.imimg.com/data5/GI/HK/LA/SELLER-7711771/zandu-balm-500x500.jpg",
		Caption: "झंडू बाम | प्राकृतिक रूप से दर्द में आराम",
		discountedPrice: 50,
		realPrice: 60,
	},
	{
		imageURL: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
		Caption: "Slim-fitting style, contrast raglan long sleeve",
		discountedPrice: 500,
		realPrice: 600,
	},
	{
		imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
		Caption: "Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
		discountedPrice: 5000,
		realPrice: 6000,
	},
	{
		imageURL: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
		Caption: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
		discountedPrice: 550,
		realPrice: 650,
	},
]


const Home = () => {
	return (

		<FlatList
			data={data}
			keyExtractor={({ Caption }) => Caption}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => <Screen imageURL={item.imageURL} caption={item.Caption} discountedPrice={item.discountedPrice} realPrice={item.realPrice} />}
		/>
	)
}

export default Home
