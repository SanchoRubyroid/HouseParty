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
                <div>Authorized: {this.state.authorized ? 'yep' : 'nope'}</div>
                <div>Username: {this.state.username}</div>
            </div>
        );
    }
}