class UnauthorizedBox extends React.Component {
    constructor() {
        super();

        this.state = {
            token: '',
            valid: true,
            loading: false,
            notifyUnauthorized: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            notifyUnauthorized: this.props.notifyUnauthorized
        })
    }

    handleChange(event) {
        this.setState({token: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.token.length == 4) {
            this.setState({loading: true, valid: true})
            window.location = `/${this.state.token}`
        }
        else
            this.setState({valid: false})

        event.preventDefault();
    }

    renderNotification() {
        if (this.state.notifyUnauthorized)
            return (
                <div className="notification is-warning">
                    <button className="delete" onClick={() => this.setState({notifyUnauthorized: false})}></button>
                    <span className="icon">
                        <i className="fa fa-exclamation"></i>
                    </span>

                    <span>Unrecognized token.</span>
                </div>)
    }

    render() {
        return (
            <section className="hero is-fullheight is-primary is-bold">
                {this.renderNotification()}
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Please enter your token
                        </h1>

                        <form onSubmit={this.handleSubmit}>
                            <div className="field is-grouped is-grouped-centered">
                                <p className="control">
                                    <input maxLength="4"
                                           className={`input is-large ${this.state.valid ? '' : 'is-danger'}`}
                                           size="4" type="text" placeholder="XXXX" style={{textTransform: 'uppercase'}}
                                           onChange={this.handleChange} autoFocus={true}/>
                                </p>

                                <p className="control">
                                    <button className={`button is-large is-primary ${this.state.loading ? 'is-loading' : ''}`} type="submit">
                                    <span className="icon is-medium">
                                        <i className="fa fa-universal-access"></i>
                                    </span>
                                        <span>Enter</span>
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}