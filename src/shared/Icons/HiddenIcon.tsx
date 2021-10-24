import React, {Component} from 'react';

class HiddenIcon extends Component {
    render() {
        return (
                <svg width="12" height="12">
                    <use xlinkHref="#icon-hidden"/>
                </svg>
        );
    }
}

export default HiddenIcon;