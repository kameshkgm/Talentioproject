import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <div className="container-fluid p-0" id="home-section">
                <div id="fruitCarousel" className="carousel slide" data-ride="carousel" data-interval="5000">
                    <ol className="carousel-indicators">
                        <li data-target="#fruitCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#fruitCarousel" data-slide-to="1"></li>
                        <li data-target="#fruitCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/fruits/f1.jpg" className="d-block w-100 carousel-image" alt="Fruit 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="/fruits/f2.jpg" className="d-block w-100 carousel-image" alt="Fruit 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="/fruits/f3.jpg" className="d-block w-100 carousel-image" alt="Fruit 3" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#fruitCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#fruitCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="text-center mt-4">
                    <h1 className="animated-text">Welcome to our website</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
