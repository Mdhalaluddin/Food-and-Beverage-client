import {useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";


const CardDetails = () => {
    const cards = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();
    const card = cards.find(card => card._id === id)
    console.log(cards, card, id);
    const handleCardBtn = e => {
        e.preventDefault();
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(card)
        })
        .then(res => res.json())
        .then(data => { console.log(data);
            if (data.insertedId) {
                Swal.fire(
                    'success',
                    'Your request successfully!',
                    'success'
                )
                return navigate("/myCart")
            }
        })
    }
    return (

        <>
            <Navbar></Navbar>
            <div className="my-5">
                <h2 className="text-center text-3xl font-bold my-5 font-serif">Card Details</h2>
                <div className="hero min-h-screen bg-base-200 max-w-[92%] mx-auto px-4">
                    <form onSubmit={handleCardBtn} >
                        <div className="hero-content flex-col lg:flex-row ">
                            <img src={card.photo} name="photo" className="max-w-sm mr-5 rounded-lg shadow-2xl shadow-amber-800" />
                            <div>
                                <h1 name="brandName" className="text-3xl font-bold mb-2">{card.brandName}</h1>
                                <p>Category: <span className="font-bold">{card.category}</span></p>
                                <div className="flex gap-5 my-2">
                                    <p>Name: <span name="name" className="font-bold">{card.name}</span></p>
                                    <p>Price: <span className="font-bold">{card.price}</span></p>
                                </div>
                                <p className="py-6 justify-center pr-10">{card.description}</p>
                                <input onClick={handleCardBtn} type="submit" value="ADD TO CART" className="w-1/2 btn btn-info hover:bg-red-500" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-5 mb-0">
                <Footer></Footer>
            </div>
        </>
    );
};

export default CardDetails;