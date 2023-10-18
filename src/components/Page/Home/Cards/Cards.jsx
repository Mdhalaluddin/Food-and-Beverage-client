

const Cards = ({ card }) => {
    const { image, name, price, brand } = card;
    return (
        <div className="card  bg-gray-600 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">{name}</div>
                </h2>
                <p>{brand}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Details</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;