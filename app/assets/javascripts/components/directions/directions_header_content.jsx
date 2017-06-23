class DirectionsHeaderContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="tile is-child notification is-success is-bold">
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-map-marker"></i></span>
                    <span>Directions</span>
                </p>

                <div className="columns">
                    <div className="column">
                        <a className="button is-success is-inverted is-outlined is-fullwidth" target="_blank" href="https://www.google.com/maps/dir/Current+Location/40.491750, -111.999694">
                            <span>Open in Google Maps</span>
                        </a>
                    </div>
                    <div className="column">
                        <a className="button is-success is-inverted is-outlined is-fullwidth" target="_blank" href="https://www.google.com/maps/dir/Current+Location/40.491750, -111.999694">Open in Google Maps</a>
                    </div>
                </div>

                
            </div>
        );
    }
}