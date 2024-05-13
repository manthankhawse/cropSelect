import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
  

  const Dropdown = ({data, setter}) => {
    const [type, setType] = useState('');

    return (
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        maxHeight={200}
        value={type}
        data={data}
        valueField="value"
        labelField="lable"
        placeholder="Select"
        searchPlaceholder="Search..."
        onChange={e => {
          setter(e.value);
        }}
      />
    );
  };

  export default Dropdown;

  const styles = StyleSheet.create({
    dropdown: {
      marginVertical:10,
      marginHorizontal:10,
      height: 50,
      width: 150,
      backgroundColor: '#EEEEEE',
      borderRadius: 22,
      paddingHorizontal: 8,
    },
    imageStyle: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });