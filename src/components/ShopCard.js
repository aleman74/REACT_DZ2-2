import React from 'react'
import PropTypes from 'prop-types'


function ShopCard(props) {
    const view_projects = props.item;
//    console.log('ProjectList view_projects = ' + view_projects);

    // Определяем кол-во картинок в столбце
    let count1 = Math.ceil(view_projects.length / 3);
    console.log('ProjectList  view_projects.length = ' + view_projects.length + '    count1 = ' + count1);


    return (
        <div className="view-card">
            <span className="card-text-title">{props.item.name}</span>
            <v className="card-text">{props.item.color}</v>
            <img className="card-img"
                 src={props.item.img}/>
                <div className="card-price"><span className="span-price">{'$' + props.item.price}</span>
                    <button>ADD TO CART</button>
                </div>
        </div>
    );
}

ShopCard.propTypes = {

}

export default ShopCard;
