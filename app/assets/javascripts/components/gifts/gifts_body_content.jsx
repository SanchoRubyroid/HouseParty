class GiftsBodyContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="tile is-ancestor">
                <div className="tile is-6 is-parent">
                    <div className="tile is-child box">
                        <p className="subtitle">
                            <span className="icon is-medium"><i className="fa fa-gift"></i></span>
                            <span>Gifts list!</span>
                        </p>

                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus
                            mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
                            gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus.
                            Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                            neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </div>
                </div>

                <div className="tile is-6 is-parent">
                    <div className="tile is-child box">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis
                            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
                            purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus.
                            Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
                            magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}