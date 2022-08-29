import React from 'react';

interface item {
    items: Array<string>
}

const ItemList = (props: item) => {
    const { items } = props;

    // if singale item in list, then render a span
    if (items.length === 1) {
        return (<span>{items[0]}</span>)
    }

    // Multiple items on the list, render a list.
    if (items.length > 1) {
        return (
            <ul>
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        );
    }

    // No items on the list, render an empty message.
    return <span>No items in list</span>;
}

export default ItemList;