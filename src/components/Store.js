import React from 'react'
import PropTypes from 'prop-types'
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";


function Store(props) {
    /* --------------- STATE ---------------------------------------------- */
    const [icon_type, setIcon] = React.useState('view_module');
    /* -------------------------------------------------------------------- */

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    // Изменение состояния
    const funChangeIconType = (evt) => {
        console.log('Store::funChangeIconType  icon_type = ' + icon_type, evt.currentTarget, evt.nativeEvent);

        setIcon(prev_icon => (prev_icon == 'view_module') ? 'view_list' : 'view_module');
    };

    if (icon_type == 'view_list') {

        return (
            <div id="container">
                <IconSwitch icon={icon_type} onSwitch={funChangeIconType}/>
                <ListView items={products}/>
            </div>
        );
    }
    else
    {
        return (
            <div id="container">
                <IconSwitch icon={icon_type} onSwitch={funChangeIconType}/>
                <CardsView cards={products}/>
            </div>
        );
    }

}

Store.propTypes = {

}

export default Store;
