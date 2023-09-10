import React, { useState, useEffect } from 'react';
import Data from '@/utils/data.json';

const useAudiophileApi = () => {
    const [fileData, setFileData] = useState([]);

    //Default fetch
    const fetchData = () => {
        setFileData(Data);
    }

    useEffect(()=>{ fetchData() }, []);

    //Default fetch
    const fetchCategory = (product) => {
        setFileData(
            Data.filter(({ category }) => category === product )
        );
    }

    //Default fetch
    const fetchProductByID = (productName) => {
        setFileData(
            Data.find(({ slug }) => slug === productName )
        );
    }

  return { fileData, fetchCategory, fetchProductByID };
}

export default useAudiophileApi;
