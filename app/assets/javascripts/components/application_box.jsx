class ApplicationBox extends React.Component {
    constructor() {
        super();

        this.state = {
            authorized: false,
            username: 'Unknown'
        }
    }

    componentWillMount() {
        this.setState({
            authorized: this.props.authorized,
            username: this.props.username
        })
    }

    render() {
        return (
            <div>
                <section className="hero is-info is-bold is-fullheight">
                    <div className="hero-head">
                        <div className="container">
                            <div className="tabs is-centered">
                                <ul>
                                    <li className="is-active">
                                        <a>
                                        <span className="icon"><i className="fa fa-home"></i></span>
                                        <span>Что происходит?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="icon"><i className="fa fa-map-marker"></i></span>
                                            <span>Как доехать?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="icon"><i className="fa fa-gift"></i></span>
                                            <span>Что взять?</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Title
                            </h1>
                            <h2 className="subtitle">
                                Subtitle
                            </h2>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}