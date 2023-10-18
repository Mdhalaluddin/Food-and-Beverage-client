import { Link } from "react-router-dom";


const Cards = ({ card }) => {
    const { name, _id, brandName, price, category, description, photo } = card;
    return (
        <div className="card  bg-gray-600 shadow-xl">
            <figure><img src={photo} alt="photo" className="h-[200px] w-full"/></figure>
            <div className="card-body text-white">
                <h2 className="card-title">
                    {name}
                </h2>
                {/* <p>{category}</p> */}
                <p>{brandName}</p>

                {/* <p>{description}</p> */}
                <div className="card-actions">
                    <p>$ <span className="text-red-500">{price}</span></p>
                    <Link to={`/food/${_id}`}>
                        <button className="badge bg-green-950 badge-outline">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;