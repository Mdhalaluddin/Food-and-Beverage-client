import { Link,  } from "react-router-dom";



const AllProduct = ({ product }) => {
    // const {_id} = useParams()
    const { img_url, brandName } = product;
    return (
        <Link to={`/foods/${brandName}`}>
            <div className="card  bg-rose-50 shadow-xl">
                <figure><img src={product.img_url} alt="photo" className="h-[200px] w-full" /></figure>
                <div className="card-body text-red-600">
                    <h2 className="text-2xl font-semibold text-center">{product.brandName}</h2>
                    <div className="flex justify-center">
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AllProduct;