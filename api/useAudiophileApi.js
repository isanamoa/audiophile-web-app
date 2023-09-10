import React, { useState, useEffect } from 'react';
import Data from '@/utils/data.json';

const useAudiophileApi = () => {
    const [fileData, setFileData] = useState([]);

    //Default fetch
    const fetchData = () => {
        try {
            setFileData(Data);
        } catch (error) {
            console.log(error); 
        }
        
    }

    useEffect(()=>{ fetchData() }, []);

    //Default fetch by category
    const fetchCategory = (product) => {
        try {
            setFileData(
                Data.filter(({ category }) => category === product )
            );
        } catch (error) {
            console.log(error); 
        }
        
    }

    //Default fetch item by id
    const fetchProductByID = (productName) => {
        try {
            setFileData(
                Data.find(({ slug }) => slug === productName )
            ); 
        } catch (error) {
            console.log(error); 
        }
    }

  return { fileData, fetchCategory, fetchProductByID };
}

export default useAudiophileApi;
