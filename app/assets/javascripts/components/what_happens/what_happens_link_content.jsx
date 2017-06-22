class WhatHappensLinkContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="tile is-child notification is-info is-bold clickable" onClick={() => this.props.setTabNumber(0)}>
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-home"></i></span>
                    <span>What's happening?</span>
                </p>
            </div>
        )
    }
}