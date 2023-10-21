import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Cover from "./Cover/Cover";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import About from "./About/About";


const Home = () => {
    const products = [
        {
            "id": "01",
            "product_name": "Burger",
            "img_url": "https://i.ibb.co/K0mLtqt/israel-albornoz-YFG2-ZYo-MWQ-unsplash-1.jpg"
        },
        {
            "id": "02",
            "product_name": "Pizz",
            "img_url": "https://i.ibb.co/b2kvz3j/ivan-torres-MQUqbmsz-GGM-unsplash.jpg"
        },
        {
            "id": "03",
            "product_name": "Pasta",
            "img_url": "https://i.ibb.co/PQzppdd/sheri-silver-q5-C-co-AZR4-unsplash-1.jpg"
        },
        {
            "id": "04",
            "product_name": "Coffee",
            "img_url": "https://i.ibb.co/NS6DjnS/frank-mckenna-j-ODz47e-M1w8-unsplash-1.jpg"
        },
        {
            "id": "04",
            "product_name": "Hot Sushi",
            "img_url": "https://i.ibb.co/5kqnqL8/fly-d-kwg-CZZrhcp0-unsplash-1.jpg"
        },
        {
            "id": "04",
            "product_name": "Drink & Juice",
            "img_url": "https://i.ibb.co/9nz6v54/ben-kolde-0-Ussqg7kk-Qo-unsplash-1.jpg"
        }
    ]
    let {brandName}= useParams()
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
    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="mt-11 mb-6">
                <p className="font-bold text-center my-2 italic text-red-700">Best Food Menu</p>
                <h2 className="text-4xl text-center font-serif font-semibold">Our Popular Food Items</h2>
                <Link to={`/food/${brandName}`}>
                    <div className="grid md:grid-cols-3 justify-center max-w-[92%] mx-auto mt-10 gap-4">
                        {
                            products.map(product => <><div key={product.id}>
                                <div className="card  bg-rose-50 shadow-xl">
                                    <figure><img src={product.img_url} alt="photo" className="h-[200px] w-full" /></figure>
                                    <div className="card-body text-red-600">
                                        <h2 className="text-2xl font-semibold text-center">{product.product_name}</h2>
                                        <div className="flex justify-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>)
                        }
                    </div>
                </Link>
            </div>
            <div>
                <About></About>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;