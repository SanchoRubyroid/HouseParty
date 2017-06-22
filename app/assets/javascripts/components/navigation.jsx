class Navigation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <nav className="nav">
                    <div className="nav-center">
                        <div className="nav-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button" onClick={() => this.props.setTabNumber(1)}>
                                        <span className="icon"><i className="fa fa-home"></i></span>
                                        <span>Что происходит?</span>
                                    </a>
                                </p>

                                <p className="control">
                                    <a className="button" onClick={() => this.props.setTabNumber(2)}>
                                        <span className="icon"><i className="fa fa-map-marker"></i></span>
                                        <span>Как доехать?</span>
                                    </a>
                                </p>

                                <p className="control">
                                    <a className="button" onClick={() => this.props.setTabNumber(3)}>
                                        <span className="icon"><i className="fa fa-gift"></i></span>
                                        <span>Что взять?</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}