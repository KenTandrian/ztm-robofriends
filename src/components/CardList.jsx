import React from 'react';
import Card from './Card';

// This is a PURE FUNCTION, hence a DUMB COMPONENT
const CardList = ({ robots }) => {
    // How to make an error:
    // if (true) {
    //     throw new Error ('NOOOOOOO!');
    // }
    return (
        <div>
            {
            robots.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name = {robots[i].name} 
                        email = {robots[i].email}
                    />
                );
            })
            }
        </div>
    );
}
export default CardList;
