import { useLoaderData } from "react-router-dom";
import Footer from "../Page/Home/Footer/Footer";
import Navbar from "../Page/Home/Navbar/Navbar";
import Cards from "../Page/Home/Cards/Cards";
import Cover from "../Page/Home/Cover/Cover";

const Food = () => {
    const loader = useLoaderData();
    console.log(loader);
    return (
        <>
            <Navbar></Navbar>
            <Cover></Cover>

            <div className="mt-11 mb-6">
                <p className="font-bold text-center my-2 italic text-red-700">Best Food Menu</p>
                <h2 className="text-4xl text-center font-serif font-semibold">Our Popular Food Items</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-center max-w-[92%] mx-auto mt-10 gap-4">
                    {
                        loader?.map(card => <Cards key={card.id} card={card}></Cards>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Food;