

const Cover = () => {
    return (
        <div className="hero min-h-screen bg-base-200 max-w-[92%] mx-auto mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse px-6">
                <div className="carousel md:w-1/2">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/WPdCXWg/lidye-1-Shk-Pk-Nk-Nw-unsplash.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/S5wMsc5/jason-wong-k-Sl-L887znk-E-unsplash-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/WWGhx2H/vit-ch-Oxb84-ENc-Ff-U-unsplash-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/ZG4YQRn/mgg-vitchakorn-98-Xi5v-MGKck-unsplash-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
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