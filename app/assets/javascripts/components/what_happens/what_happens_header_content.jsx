class WhatHappensHeaderContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="tile is-child notification is-info is-bold">
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-home"></i></span>
                    <span>{ContentVariables.getCaption(0)}</span>
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat
                    ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
                    dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et
                    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                    vehicula et sem eget, facilisis sodales sem.</p>
            </div>
        );
    }
}