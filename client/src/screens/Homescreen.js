import React from 'react';
import Pizza from '../components/Pizza';
import pizzas from '../pizzasdata';

export default function Homescreen() {
    return (
        <div>
            <div className="row">
                {
                    pizzas.map(pizza => {
                        console.log();
                        return <div className="col-md-4" key={pizza.name}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
