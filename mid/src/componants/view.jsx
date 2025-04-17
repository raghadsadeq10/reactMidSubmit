import React from "react";
import Store from "../flux/Store/store";

const View = () => {
    const people = Store.People;

    return (
        <div>
            <h1>Our Data</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
};



export  default View;



/*<h4>{product.email}</h4>
            <h4>{product.role}</h4>
            <h4>{product.status}</h4>
 */