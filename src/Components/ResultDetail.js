import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';

const ResultDetail = ({result})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.title}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 5,
        height: 125,
        width: 250,
        marginBottom: 5
    },
    title:{
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 15,
    }
});

export default ResultDetail;