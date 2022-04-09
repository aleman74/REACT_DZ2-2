import React from 'react'
import PropTypes from 'prop-types'


function IconSwitch(props) {
//    const icon_name = props.icon;
    console.log('IconSwitch - props.icon = ' + props.icon);

    // Заглушки для функций, сами функции определяются в родительском компоненте
    const onClickButton = (evt) => {
        console.log('IconSwitch - onClickButton');

        props.onSwitch(evt);     // передаём текущий фильтр
    }

    return (
        <div id="div_image">
            <span className="material-icons" onClick={onClickButton}>{props.icon}</span>
        </div>
    );
}

IconSwitch.propTypes = {
/*
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
*/
}

export default IconSwitch;
