import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, useWindowDimensions } from 'react-native';

const AgeComponent = () => {
    const currentYear = new Date().getFullYear();
    const yearArray = Array.from({ length: 100 }, (_, index) => currentYear - index);
    const monthArray = Array.from({ length: 12 }, (_, index) => index + 1);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1);

    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const dayArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const { width: windowWidth } = useWindowDimensions();


    return (
        <View style={[{ width: windowWidth - 20, height: 400 }]}>
            <Picker
                selectedValue={selectedYear}
                onValueChange={(itemValue) => setSelectedYear(itemValue)}>
                {yearArray.map((year) => (
                    <Picker.Item key={year} label={year.toString()} value={year} />
                ))}
            </Picker>

            <Picker
                selectedValue={selectedMonth}
                onValueChange={(itemValue) => setSelectedMonth(itemValue)}>
                {monthArray.map((month) => (
                    <Picker.Item key={month} label={month.toString()} value={month} />
                ))}
            </Picker>

            <Picker
                selectedValue={selectedDay}
                onValueChange={(itemValue) => setSelectedDay(itemValue)}>
                {dayArray.map((day) => (
                    <Picker.Item key={day} label={day.toString()} value={day} />
                ))}
            </Picker>
        </View>
    );
}

export default AgeComponent;
