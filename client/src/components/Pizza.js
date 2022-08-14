import React, { useState } from 'react'

export default function Pizza({ pizza }) {

    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');

    return (
        <div className='m-5'>
            <h1>
                {pizza.name}
            </h1>
            <img src={pizza.image}
                alt="pizza"
                className="img-fluid"
                style={{ height: "200px", width: "200px" }} />
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }} >
                        {pizza.varients.map(varient => {
                            return <option value={varient} key={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {
                            [...Array(10).keys()].map((x, i) => {
                                return <option value={i + 1} key={i + 1}>{i + 1}</option>
                            }
                            )
                        }
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1>Price : {pizza.prices[0][varient] * quantity}</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>

        </div >
    )
}
