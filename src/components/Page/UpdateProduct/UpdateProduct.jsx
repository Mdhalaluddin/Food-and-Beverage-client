import { useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const navigate = useNavigate()
    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newFood = { name, brandName, price, category, description, photo };
        // console.log(newFood);


        fetch('http://localhost:5000/food', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newFood)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    return navigate("/")
                }
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full shadow-2xl bg-rose-400 shadow-amber-700">
                    <h1 className="text-3xl font-bold text-center mt-6">Add Food</h1>
                    <form onSubmit={handleUpdateFood} className="card-body">
                        <div className="flex gap-4">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Short description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <input type="submit" value="Add Product" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;