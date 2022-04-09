import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from "./ShopItem";


function ListView(props) {

    return (
        <table class="table-view-list">
            <tbody>
                {props.items.map((o) => <ShopItem item={o}/>)}
            </tbody>
        </table>
    );
}

ListView.propTypes = {

}

export default ListView;
