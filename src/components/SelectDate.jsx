import { StyleSheet, Text, View, Platform, Pressable } from 'react-native'
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const SelectDate = ({setDateSelected}) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setDateSelected(currentDate)
    };


    const showDatepicker = () => {
        setShow(!show);
    };

    return (
        <Pressable style={styles.container}
        onPress={showDatepicker}>

            <View style={styles.datePickerButton}
                >
                <Text>
                    Seleccionar fecha
                </Text>
            </View>
            {Platform.OS==='ios'|| <Text> {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</Text>}
            {Platform.OS === 'ios'? <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />:show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}

            
        </Pressable>
    )
}

export default SelectDate

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20,
    },
    datePickerButton: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
    }
})