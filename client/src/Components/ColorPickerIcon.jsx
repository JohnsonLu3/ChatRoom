import React from 'react';

export default class ColorPickerIcon extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div id="colorPickerButton">
                <span className="sr">Username color picker</span>
                <div className="colorCircle cpb_red"></div>
                <div className="colorCircle cpb_blue"></div>
                <div className="colorCircle cpb_green"></div>
            </div>
        )
    }
}