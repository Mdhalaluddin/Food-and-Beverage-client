import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from "react";
// import Swal from "sweetalert2";

const Cart = () => {
    const loader = useLoaderData()
    const [carts, setCarts] = useState(loader);

    const handleDeletedBtn = (id )=> {
        console.log(id);
        fetch(`http://localhost:5000/carts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove the cart from the UI
                    const remainingCarts = carts.filter(cart => cart._id !== id)
                    setCarts(remainingCarts)
                }
            })




        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   })
        //   .then((result)=>{
        //     if(result.isConfirmed){
        //         fetch(`http://localhost:5000/cart/${id}`,{
        //             method: 'DELETE'
        //         })
        //         .then(res => res.json())
        //         .then(data=>{
        //             if(data.deletedCount>0){
        //                 Swal.fire(
        //                     'Deleted!',
        //                     "Your Cart has been deleted.",
        //                     "success"
        //                 )
        //             // remove the cart from the UI
        //             const remainingCarts = carts.filter(cart=> cart._id !== id)
        //             setCart(remainingCarts)
        //             }
        //         })
        //     }
        //   })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[92%] mx-auto space-y-6 bg-gray-200 rounded-lg  my-7">
                <h2 className="text-3xl text-rose-700 text-center font-serif font-bold pt-3">Your Shopping Cart</h2>
                {
                    carts.map(cart => <div key={cart._id} >
                        <nav className="flex justify-center gap-6 py-7 ">
                            <div className="avatar mr-7">
                                <div className="w-24 rounded-full ring ring-rose-400 ring-offset-base-100 ring-offset-2">
                                    <img className="w-full" src={cart.photo} />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{cart.name}</h2>
                                <h2 className="text-xl font-semibold">{cart.category}</h2>
                            </div>
                            <button onClick={() => handleDeletedBtn(cart._id)} className="text-5xl font-bold text-red-600"><AiOutlineDelete></AiOutlineDelete></button>
                        </nav>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;
