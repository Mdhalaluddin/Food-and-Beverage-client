import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const AllProduct = () => {
    const loaderFood = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/food', {
            method: "GET",
            headers: {
                'content-type': "application/json"
            },
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
    console.log(loaderFood);
    return (
        <div>
            
        </div>
    );
};

export default AllProduct;