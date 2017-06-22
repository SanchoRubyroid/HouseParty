class UnauthorizedBox extends React.Component {
    constructor() {
        super();

        this.state = {
            token: '',
            valid: true,
            loading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({token: event.target.value});
    }

    handleSubmit() {
        if(this.state.token.length == 4) {
            this.setState({loading: true, valid: true})
            window.location = `/${this.state.token}`
        }
        else
            this.setState({valid: false})
    }

    render() {
        return (
            <section className="hero is-fullheight is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Please enter your token
                        </h1>

                        <div className="field is-grouped is-grouped-centered">
                            <p className="control">
                                <input maxLength="4" className={`input is-large ${this.state.valid ? '' : 'is-danger'}`}
                                       size="4" type="text" style={{textTransform: 'uppercase'}}
                                       placeholder="XXXX" onChange={this.handleChange}/>
                            </p>

                            <p className="control">
                                <button className="button is-large is-primary" onClick={this.handleSubmit}>
                                    <span className="icon is-medium">
                                        <i className={`fa fa-universal-access ${this.state.loading ? 'fa-spin' : ''}`}></i>
                                    </span>
                                    <span>Submit</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}