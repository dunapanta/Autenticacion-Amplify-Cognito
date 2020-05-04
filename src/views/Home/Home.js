import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify'

export const Home = () => {

    async function funcApi() {
        try{
            const peopleData = await API.get('mainappapi', '/people') // name, path
            console.log("Info de la Api ")
            console.log('peopleData: ', peopleData);
        }catch (err){
            console.log({err})
        }
    }
    useEffect(() => {
        funcApi()
    }, []) // para que corra solo una vez
    
    return(
        <h1>HOME</h1>
    );
    
}

export default Home