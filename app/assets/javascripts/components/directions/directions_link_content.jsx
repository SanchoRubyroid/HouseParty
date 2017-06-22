class DirectionsLinkContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="tile is-child notification is-success is-bold clickable" onClick={() => this.props.setTabNumber(1)}>
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-map-marker"></i></span>
                    <span>Directions</span>
                </p>
            </div>
        );
    }
}