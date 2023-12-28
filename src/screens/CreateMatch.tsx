import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../theme/Style';
import { colors } from '../theme/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../route/types';
import moment from 'moment';

interface FormValues {
    date: string;
    startTime: string;
    endTime: string;
    title: string;
}
type Props = NativeStackScreenProps<RootStackParamList, 'CreateMatch'>
const CreateMatch = ({navigation}: Props): JSX.Element => {
    const [formData, setFormData] = React.useState<FormValues>({ date: '', startTime: '', endTime: '', title: ''});
    const [picker, setPicker] = React.useState({ datePicker: false, timePicker: false})

    return <>
        <StatusBar backgroundColor={colors.white} barStyle={'dark-content'}/>
        <View style={styles.container}>
            <View style={styles.headerBody}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Icon name='arrow-back-outline' color={colors.black} size={24} />
                    </TouchableOpacity>
                    <Text style={styles.wlcmTxt}>CreateMatch</Text>
                </View>
            </View>
            <ScrollView style={styles.formBg}>
                <Text style={styles.formLabel}>Select data</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => setPicker({ ...picker, datePicker: true })} style={styles.pickerStyle}>
                    <Text style={{color: formData.date ? colors.black : colors.grey2 }}>{formData.date ? formData.date : 'Select data'}</Text>
                </TouchableOpacity>
                {React.useMemo(() => {
                    return picker.datePicker && (
                        <DateTimePicker
                            value={formData.date ? moment(formData.date,'MMM DD, YYYY').toDate() : moment().toDate()}
                            mode={'date'}
                            display={'calendar'}
                            timeZoneName={'Asia/Calcutta'}
                            minimumDate={moment().toDate()}
                            maximumDate={moment().add(30, 'days').toDate()}
                            // @ts-ignore
                            onChange={(event, selectedDate: Date) => {
                                console.log(selectedDate,moment().format('YYYY-MM-DD h:mm:ss a'))
                                setFormData({...formData, date: moment(selectedDate).format('MMM DD, YYYY')  })
                                setPicker({...picker,datePicker: false});
                            }}
                        />
                        )
                    },[picker.datePicker])
                }
                <Text style={styles.formLabel}>Set time</Text>
                <View style={styles.horizontalGrid}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setPicker({ ...picker, timePicker: true })} style={[styles.pickerStyle,styles.inputTime]}>
                        <Text style={{color: formData.startTime ? colors.black : colors.grey2 }}>{formData.startTime ? formData.startTime : 'Start'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setPicker({ ...picker, timePicker: true })} style={[styles.pickerStyle,styles.inputTime]}>
                        <Text style={{color: formData.endTime ? colors.black : colors.grey2 }}>{formData.endTime ? formData.endTime : 'End'}</Text>
                    </TouchableOpacity>
                </View>
                {React.useMemo(() => {
                    return picker.timePicker && (
                        <DateTimePicker
                            value={formData.startTime ? moment(formData.startTime,'hh:mm a').toDate() : moment().toDate()}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'clock'}
                            timeZoneName={'Asia/Calcutta'}
                            minimumDate={moment().toDate()}
                            maximumDate={moment().add(24, 'hours').toDate()}
                            // @ts-ignore
                            onChange={(event, selectedDate: Date) => {
                                // console.log(selectedDate,moment().format('YYYY-MM-DD h:mm:ss a'))
                                // setFormData({...formData, startTime: moment(selectedDate).format('hh:mm a')  })
                                // setPicker({...picker, timePicker: false});
                            }}
                        />
                        )
                    },[picker.timePicker])
                }
            </ScrollView>
        </View>
    </>
}

export { CreateMatch }