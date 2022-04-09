import React from 'react'
import PropTypes from 'prop-types'


function ShopItem(props) {

    return (
        <tr>
            <td><img className="list-img" src={props.item.img}/></td>
            <td><span className="card-text-title">{props.item.name}</span></td>
            <td><span className="card-text">{props.item.color}</span></td>
            <td><span className="span-price">{'$' + props.item.price}</span></td>
            <td><button>ADD TO CART</button></td>
        </tr>
    );
}

ShopItem.propTypes = {

}

export default ShopItem;
