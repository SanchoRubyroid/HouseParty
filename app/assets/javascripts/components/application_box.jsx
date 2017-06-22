class ApplicationBox extends React.Component {
    constructor() {
        super();

        this.state = {
            authorized: false,
            username: 'Unknown',
            tabNumber: null
        }
    }

    componentWillMount() {
        this.setState({
            authorized: this.props.authorized,
            username: this.props.username
        })
    }

    componentDidMount() {
        if (this.state.authorized)
            window.history.pushState(null, "", "/");
    }

    setTabNumber(tabNumber) {
        this.setState({tabNumber});
    }

    getContent() {
        if (this.state.authorized)
            return (
                <div>
                    <Navigation setTabNumber={this.setTabNumber.bind(this)}/>
                    {this.getAuthorizedContent()}
                </div>)
        else
            return (<UnauthorizedBox notifyUnauthorized={this.props.notifyUnauthorized}/>)
    }

    getAuthorizedContent() {
        switch (this.state.tabNumber) {
            case 2:
                return (<DirectionsBox/>)
            case 3:
                return (<GiftsBox/>)
            default:
                return (<WhatHappeningBox/>)
        }
    }

    render() {
        return (this.getContent());
    }
}