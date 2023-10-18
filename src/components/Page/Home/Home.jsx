import Cards from "./Cards/Cards";
import Cover from "./Cover/Cover";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    const cards = [
        {
            image: "product1.jpg",
            name: "Product 1",
            brand: "Brand A",
            type: "Phone",
            id: 1,
            price: 499.99,
            rating: 4.5,
        },
        {
            image: "product2.jpg",
            name: "Product 2",
            brand: "Brand A",
            type: "Computer",
            price: 799.99,
            rating: 4.0,
        },
        {
            image: "product3.jpg",
            name: "Product 3",
            brand: "Brand A",
            type: "Headphone",
            price: 99.99,
            rating: 4.2,
        },
        {
            image: "product3.jpg",
            name: "Product 3",
            brand: "Brand A",
            type: "Headphone",
            price: 99.99,
            rating: 4.2,
        },
        {
            image: "product3.jpg",
            name: "Product 3",
            brand: "Brand A",
            type: "Headphone",
            price: 99.99,
            rating: 4.2,
        },
        {
            image: "product3.jpg",
            name: "Product 3",
            brand: "Brand A",
            type: "Headphone",
            price: 99.99,
            rating: 4.2,
        },
        // Add more products here
    ];




    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-center max-w-[92%] mx-auto mt-10 gap-4">
                {
                    cards.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;