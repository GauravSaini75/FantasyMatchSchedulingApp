import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../route/types';
import { styles } from '../theme/Style';
import { colors } from '../theme/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Match } from '../store/matchs/types';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>
const HomeScreen = ({navigation, route}: Props): JSX.Element => {
	const { matchs } = useSelector(({ matchs }: RootState) => matchs);

	const _renderItem = ({item, index}: {item: Match, index: number}) => {
		return <>
		</>
	}

	const _listEmptyComponent = () => {
		return <>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={styles.message}>No item found.</Text>
			</View>
		</>
	}

    return <>
	    <StatusBar backgroundColor={colors.white} barStyle={'dark-content'}/>
		<View style={styles.container}>
			<View style={styles.headerBody}>
				<Text style={styles.wlcmTxt}>Welcome, Jhon</Text>
				<TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('CreateMatch')} style={styles.btnStyle}>
					<Text style={styles.btnText}>+ New Match</Text>
				</TouchableOpacity>
			</View>
			<FlatList
			    contentContainerStyle={{ flexGrow: 1 }}
			    data={matchs}
				keyExtractor={(item,index) => index.toString()}
				renderItem={_renderItem}
				extraData={matchs}
				ListEmptyComponent={_listEmptyComponent}
			/>
		</View>
    </>
}

export { HomeScreen };