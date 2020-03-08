import React, { useState } from 'react';
import { StyleSheet, Animated, I18nManager, TouchableOpacity, View, Image } from 'react-native';

import { 
	Post, 
	Header, 
	Avatar, 
	Name, 
	Description, 
	Heart, 
	DescriptionText, 
	HeartBox,
	ImageOverlay
} from './styles';
import LazyImage from '../../components/LazyImage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Posts({ item, viewable }) {
	const [lastPress, setLastPress] = useState(0)
	const [liked, setLiked] = useState(false)


	const navigation = useNavigation();

	function handleLikeAction() {
		var delta = new Date().getTime() - lastPress

		if (delta < 200) {
			setLiked(!liked)				
		}

		setLastPress(new Date().getTime())
	}

	return (
		<Post>
			<Header onPress={() => navigation.navigate('Profile', { id: item.authorId })}>
				<Avatar source={{ uri: item.author.avatar }} />
				<Name>{item.author.name}</Name>
			</Header>
			<TouchableHighlight onPress={handleLikeAction}>
					<LazyImage
						aspectRatio={item.aspectRatio}
						smallSource={{ uri: item.small }}
						source={{ uri: item.image }}
						shouldLoad={viewable.includes(item.id)}
					/>
			</TouchableHighlight>
			<Description>
				<HeartBox onPress={() => setLiked(!liked)}>
					<TouchableOpacity onPress={() => setLiked(!liked)}>
						<Heart
							source={
								liked
								? require("../../assets/icons/heart/heart.png")
								: require("../../assets/icons/heart/heart-outline.png")
							}
							resizeMode="cover"
						/>
					</TouchableOpacity>
				</HeartBox>
				<Name>{item.author.name}</Name> 
				<DescriptionText>{item.description}</DescriptionText>
			</Description>
		</Post>
	);
}

const styles = StyleSheet.create({
	leftAction: {
		flex: 1,
		backgroundColor: '#0f0',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
	},
	actionIcon: {
		width: 30,
		marginHorizontal: 10,
	},
	rightAction: {
		alignItems: 'center',
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
		backgroundColor: '#dd2c00',
		flex: 1,
		justifyContent: 'flex-end',
	},
});
