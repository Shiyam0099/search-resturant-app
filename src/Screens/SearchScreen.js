import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';


const SearchScreen = ()=> {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults(); 

    const getResultsByPrice=(price)=>{

        return results.filter(result => { return result.price === price});

    };
   
    return(
        <>
            <SearchBar term = {term} 
            onTermChange={setTerm} 
            onTermSubmit = {()=>searchApi(term)} 
            />

            {errorMessage ? <Text>{errorMessage}</Text>: null}
            
            <ScrollView>
            <ResultList result={getResultsByPrice('$')} title="Cost Effective"/>
            <ResultList result={getResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultList result={getResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;