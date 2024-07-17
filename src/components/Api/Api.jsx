import React from "react";
import axios from 'axios';

export const URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export const FetchApi = async()=>{
    try{
        let response  = await axios.get(URL);
        console.log(response);
        return response.data;
    } 
    catch(error){
        console.error('Error fetching data: ',error);
        return [];
    }
}