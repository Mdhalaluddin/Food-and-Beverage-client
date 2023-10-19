import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const FoodBrand = ({ product }) => {
    const { product_name, img_url } = product;
    return (
        <div>
            <Link to="/allfood">
                <div className="card bg-[#d27a22] shadow-xl">
                    <figure className="">
                        <img src={img_url} alt="Food" className="rounded-lg w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-serif">{product_name}</h2>
                    </div>
                </div>

            </Link>
        </div>
    );
};

FoodBrand.propTypes = {
    product: PropTypes.array
}

export default FoodBrand;