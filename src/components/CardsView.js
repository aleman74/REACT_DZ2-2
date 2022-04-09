import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from "./ShopCard";


function CardsView(props) {

    // Определяем кол-во картинок в столбце
    let count1 = Math.ceil(props.cards.length / 3);

    return (
        <table className="table-view-card">
            <tbody>
                <tr>
                    <td>
                        {props.cards.filter((o, index) => index < count1).map((o, index) => <ShopCard item={o}/>)}
                    </td>
                    <td>
                        {props.cards.filter((o, index) => index >= count1 && index < count1 * 2).map((o, index) => <ShopCard item={o}/>)}
                    </td>
                    <td>
                        {props.cards.filter((o, index) => index >= count1 * 2).map((o, index) => <ShopCard item={o}/>)}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

CardsView.propTypes = {

}

export default CardsView;
