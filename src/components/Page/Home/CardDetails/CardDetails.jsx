import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card._id === id)
    console.log(cards, card, id);
    const { name, _id, brandName, price, category, description, photo } = card;
    return (

        <>
            <Navbar></Navbar>


            <div className="my-5">
                <h2 className="text-center text-3xl font-bold my-5 font-serif">Card Details</h2>
                <div className="hero min-h-screen bg-base-200 max-w-[92%] mx-auto px-4">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img src={card.photo} className="max-w-sm mr-5 rounded-lg shadow-2xl shadow-amber-800" />
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{card.brandName}</h1>
                            <p>Category: <span className="font-bold">{card.category}</span></p>
                            <div className="flex gap-5 my-2">
                            <p>Name: <span className="font-bold">{card.name}</span></p>
                            <p>Price: <span className="font-bold">{card.price}</span></p>
                            </div>
                            <p className="py-6 justify-center pr-10">{card.description}</p>
                            <button className="w-1/2 btn btn-info hover:bg-red-500">ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>



            <div className="mt-5 mb-0">
                <Footer></Footer>
            </div>
        </>
    );
};

export default CardDetails;