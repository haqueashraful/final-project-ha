import React from 'react';
import Card from './Card';

const CardSection = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                items.map(item => <Card key={item._id} item={item}/>)
            }
        </div>
    );
};

export default CardSection;