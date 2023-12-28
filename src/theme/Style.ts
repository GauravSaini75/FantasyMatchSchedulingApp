import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white
	},
	headerBody: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		padding: 10,
		alignItems: 'flex-end'
	},
	wlcmTxt: {
		fontSize: 24,
		fontWeight: '500',
		color: colors.black
	},
	btnStyle: {
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 8,
		elevation: 2
	},
	btnText: {
		fontSize: 16,
		fontWeight: '400',
		color: colors.white
	},
	backBtn: {
		height: 24,
		marginRight: 8
	},
	message: {
		fontSize: 18,
		fontWeight: '300',
		color: colors.grey2,
	    fontStyle: 'italic'
    },
	formLabel: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.black,
		marginBottom: 6,
		marginHorizontal: 6
	},
	formBg: {
		flexGrow: 1,
		padding: 10,
		backgroundColor: colors.smoke
	},
	pickerStyle: {
		width: '100%',
		backgroundColor: colors.white,
		padding: 10,
		height: 44,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	horizontalGrid: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputTime: {
		width: '48%'
	}
})