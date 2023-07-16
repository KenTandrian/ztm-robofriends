import React from 'react';

const Card = ({ name, email, id }: Pick<Robot, "name" | "email" | "id">) => {
    // ES6 destructuring above in the parameter
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    ); // You can only return one thing, multiple lines is okay.
}

export default Card;