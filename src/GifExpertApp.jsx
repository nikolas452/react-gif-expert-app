import React, { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = ({ defaultCategories = [] }) => {


    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    // 	// setCategories([...categories, 'HunterXHunter']);
    // 	setCategories(cat => [...cat, 'HunterXHunter']);
    //

    return ( 
        <>
        <h2> GifExpertApp </h2> 
        <AddCategory setCategories = { setCategories }/>
         <hr/>
         <ol>
            { categories.map(c => 
                <GifGrid key={c} category={c}/>
            )} 
        </ol> 
        </>
    );
};
