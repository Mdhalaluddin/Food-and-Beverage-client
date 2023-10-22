
const About = () => {
    return (
        <div className="hero  max-w-[92%] mx-auto bg-base-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:w-2/5 md:mr-6">
                    <img src="https://i.ibb.co/xzXghq4/luigi-pozzoli-i-IS1-SIO5-a-Y-unsplash.jpg" className="rounded-lg shadow-2xl" />
                </div>
                <div className="md:w-2/5 md:ml-4 ">
                    <h3 className="text-xl font-serif">
                        About Company </h3>
                    <h1 className="md:text-4xl text-2xl font-bold">Where Quality Food Meet Excellent Service.</h1>
                    <p className="py-4 font-semibold">It is the perfect dining experience where every dish is crafted with fresh, high-quality ingredients and served by friendly staff who go</p>
                    <nav className="flex w-full gap-4">
                        <div className="card md:w-2/5 w-2/5 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-center">
                                    <img className="md:w-4/5 w-full" src="https://i.ibb.co/DWXRcFm/farhad-ibrahimzade-Sk6my6-KTK0-unsplash.jpg" alt="" />
                                </div>
                                <h2 className="card-title">Fast Foods</h2>
                                <p>Health foods are nutrient-Dense Foods</p>
                            </div>
                        </div>
                        <div className="card md:w-2/5 w-2/5 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-center">
                                    <img className="md:w-4/5 w-full" src="https://i.ibb.co/VgdcPmY/thomas-tucker-MNtag-e-XMKw-unsplash.jpg" alt="" />
                                </div>
                                <h2 className="card-title">Fast Foods</h2>
                                <p>Health foods are nutrient-Dense Foods</p>
                            </div>
                        </div>
                    </nav>
                    <div>
                        <div className="card-actions my-4">
                            <button className="btn btn-primary hover:bg-red-400">About More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;