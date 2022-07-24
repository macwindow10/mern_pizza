import React from 'react'

export default function Pizza({ pizza }) {
    return (
        <div>
            <h1>
                {pizza.name}
            </h1>
            <img src={pizza.image} alt="pizza" className="img-fluid" />
        </div>
    )
}
