import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";


const AllFood = () => {
    const [data, setData] = useState([])
    const loaderData = useLoaderData();
    console.log(loaderData);
    useEffect(() => {
        fetch('https://food-and-beverage-servar.vercel.app/food', {
            method: "GET",
            headers: {
                'content-type': "application/json"
            },
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (

        <>
        <Navbar></Navbar>
            <div className="mt-11 mb-6">
                <p className="font-bold text-center my-2 italic text-red-700">Best Food Menu</p>
                <h2 className="text-4xl text-center font-serif font-semibold">Our Popular Food Items</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-center max-w-[92%] mx-auto mt-10 gap-4">

                    {
                        data.map(card => <Cards key={card.id} card={card}></Cards>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllFood;