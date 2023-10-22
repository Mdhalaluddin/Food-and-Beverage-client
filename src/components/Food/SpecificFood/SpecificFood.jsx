import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SpecificFood = ({specificData}) => {
    // const loader = useLoaderData();
    // console.log(loader);
    const {name, _id, brandName, price, photo, rating} = specificData;
    return (
        <div className="card  max-w-[92%] mx-auto  bg-gray-600 shadow-xl">
            <figure><img src={photo} alt="photo" className="h-[200px] w-full" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{brandName}</p>
                <p>rating: {rating}</p>
                <div className="card-actions">
                    <p>$ <span className="text-red-500">{price}</span></p>
                    <Link to={`/food/${_id}`}>
                        <button className="badge bg-green-950 badge-outline">Details</button>
                    </Link>
                </div>
                <div className="flex justify-center">
                <Link to={`/updateproduct/${_id}`}>
                    <button className="btn btn-sm mt-2  bg-green-950 badge-outline">Food Update</button>
                </Link>
                </div>
            </div>
        </div>
    );
};
SpecificFood.propTypes = {
    specificData: PropTypes.array
}
export default SpecificFood;