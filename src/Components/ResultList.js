import React from "react";
import {View, Text, TouchableOpacity, StyleSheet,FlatList} from 'react-native';
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList=({title, result, navigation})=>{
    if(!result.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.resultNumber}>{result.length} results found.</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator = {false}
            data={result}
            keyExtractor={(item)=>item.id}
            renderItem = {({item})=>{
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('ResultScreen',{ id: item.id})}>
                    <ResultDetail result = {item}/>
                    </TouchableOpacity>
            
            )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    resultNumber: {
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10,
    }
});

export default withNavigation(ResultList);