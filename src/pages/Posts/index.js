import React, { useState } from 'react';
import { StyleSheet, Animated, I18nManager } from 'react-native';

import { Post, Header, Avatar, Name, Description } from './styles';
import LazyImage from '../../components/LazyImage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Posts({ item, viewable }) {
	const [lastPress, setLastPress] = useState(0)
	const [liked, setLiked] = useState(false)

	const navigation = useNavigation();

	renderLeftActions = (progress, dragX) => {
		const trans = dragX.interpolate({
		  inputRange: [0, 50, 100, 101],
		  outputRange: [-20, 0, 0, 1],
		});
		return (
		  <RectButton style={styles.leftAction} onPress={this.close}>
			<Animated.Text
			  style={[
				styles.actionText,
				{
				  transform: [{ translateX: trans }],
				},
			  ]}>
			  Archive
			</Animated.Text>
		  </RectButton>
		);
	  };
	
	  renderRightActions = (progress, dragX) => {
		const scale = dragX.interpolate({
		  inputRange: [-80, 0],
		  outputRange: [1, 0],
		  extrapolate: 'clamp',
		});
		return (
		  <RectButton style={styles.rightAction} onPress={this.close}>
		  </RectButton>
		);
	  };

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
			<Swipeable 
				renderLeftActions={renderLeftActions} 
				renderRightActions={renderRightActions} 
				leftThreshold={'100%'}
			>
				<TouchableHighlight onPress={handleLikeAction}>
					<LazyImage
						aspectRatio={item.aspectRatio}
						smallSource={{ uri: item.small }}
						source={{ uri: item.image }}
						shouldLoad={viewable.includes(item.id)}
					/>
				</TouchableHighlight>
			</Swipeable>
			<Description>
				{liked ? '<3' : ''}
				<Name>{item.author.name}</Name> {item.description}
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
