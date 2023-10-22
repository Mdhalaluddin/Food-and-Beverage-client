import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Cards = ({ card }) => {
    const { name, _id, brandName, price, photo, category, rating } = card;
    return (
        <div className="card  bg-gray-600 shadow-xl">
            <figure><img src={photo} alt="photo" className="h-[200px] w-full" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">
                    {name}
                </h2>
                <h2 className="text-lg font-medium">{category}</h2>
                <div className="card-actions flex">
                <p className="font-semibold">{brandName}</p>
                <p className="ml-20 font-semibold">rating: {rating}</p>
                </div>
                <div className="card-actions mx-2 ">
                    <p className="font-semibold">$ <span className="text-red-500">{price}</span></p>
                    <Link to={`/food/${_id}`}>
                        <button className="badge hover:bg-green-950 badge-outline">Details</button>
                    </Link>
                </div>
                <div className="flex justify-center">
                <Link to={`/updateproduct/${_id}`}>
                    <button className="btn btn-sm mt-2 hover:bg-green-600 badge-outline">Food Update</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    card: PropTypes.array
}

export default Cards;