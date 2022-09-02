import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit})=> {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style = {styles.iconStyle}/>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInputStyle} 
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({

    backgroundStyle: {
        marginTop:15,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    textInputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;