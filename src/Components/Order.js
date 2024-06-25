import React, { useEffect, useState } from 'react';

const Order = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        // Fetching the JSON data locally
        fetch('/fruits.json')
            .then(response => response.json())
            .then(data => {
                setFruits(data.fruits); // Set the fruits array from the JSON data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container order-section" id="order-section">
            <h2>Order Now</h2>
            <div className="row" id="order-cards">
                {fruits.map((fruit, index) => (
                    <div className="col-md-4 pt-4" key={index}>
                        <div className="card">
                            <img src={`${process.env.PUBLIC_URL}/fruits/${fruit.image}`} className="img-fluid" alt={fruit.name} />
                            <div className="card-body">
                                <h5 className="card-title">{fruit.name}</h5>
                                <p className="card-text">Price: ${fruit.price}</p>
                                <a href="#" className="btn btn-primary">Order Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
