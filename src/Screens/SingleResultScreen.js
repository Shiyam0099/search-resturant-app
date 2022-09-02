import React, { useState, useEffect } from "react";
import {Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const SingleResultScreen = ({navigation})=>{
    const [result, setResult] = useState(null);
 const id = navigation.getParam('id');
 const getResult= async (id)=>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
 }

 useEffect(()=>{
    getResult(id);
 },[])

 if(!result){
    return null;
 }

 console.log(result);
    return (
        <>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginVertical: 5}}>{result.name}</Text>
            <Text style={styles.address}>{result.location.address1}</Text>
            <Text style={styles.address}>{result.location.city}, {result.location.country}</Text>
            <Text style={styles.phone}>Phone: {result.phone}</Text>
            
            <FlatList
            data={result.photos}
            keyExtractor={(photos)=>photos}
            renderItem={({item})=>{
                return(
                   <Image style={styles.image} source={{uri: item}}/>
                    
                )
            }}
            ></FlatList>
            
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginVertical: 10,
        marginLeft: 15,
        borderRadius: 10,
        alignSelf: "center"
     },
     address: {
      fontSize: 15, 
      alignSelf: 'center', 
     },
     phone: {
      fontSize: 13, 
      alignSelf: 'center', 
     }
});

export default SingleResultScreen;