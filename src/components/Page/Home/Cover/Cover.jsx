

const Cover = () => {
    return (
        <div className="hero min-h-screen bg-base-200 max-w-[92%] mx-auto mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse px-6">
                <img src="https://i.ibb.co/WPdCXWg/lidye-1-Shk-Pk-Nk-Nw-unsplash.jpg" className="w-[500px] aspect-video rounded-lg shadow-2xl h-[350px]" />
                <div>
                    <p className="font-bold italic text-lg text-slate-700">Welcome to <br /> <span className="pl-9 text-rose-600">Food & Beverage</span></p>
                    <h1 className="text-5xl font-bold py-4">GET BEST 
                        QUALITY FOOD <br />
                        FROM US</h1>
                    <button className="btn btn-primary mt-10">Explore + </button>
                </div>
            </div>
        </div>
    );
};

export default Cover;