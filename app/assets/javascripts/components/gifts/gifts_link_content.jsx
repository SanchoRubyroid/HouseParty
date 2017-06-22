class GiftsLinkContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="tile is-child notification is-warning is-bold clickable" onClick={() => this.props.setTabNumber(2)}>
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-gift"></i></span>
                    <span>Gift list</span>
                </p>
            </div>
        );
    }
}