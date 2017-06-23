class ApplicationBox extends React.Component {
    constructor() {
        super();

        this.state = {
            authorized: false,
            username: 'Unknown',
            tabNumber: 0
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

    getHeaderContent() {
        switch (this.state.tabNumber) {
            case 1:
                return (<DirectionsHeaderContent/>)
            case 2:
                return (<GiftsHeaderContent/>)
            default:
                return (<WhatHappensHeaderContent/>)
        }
    }

    getLinkContent(cutOffId) {
        const contentId = (this.state.tabNumber == cutOffId ? 1 : cutOffId)
        return(<LinkContent contentId={contentId} setTabNumber={this.setTabNumber.bind(this)}/>)
    }

    getBodyContent() {
        switch (this.state.tabNumber) {
            case 1:
                return (<DirectionsBodyContent/>)
            case 2:
                return (<GiftsBodyContent/>)
            default:
                return (<WhatHappensBodyContent/>)
        }
    }

    getAuthorizedContent() {
        return (
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-8 is-parent">
                            {this.getHeaderContent()}
                        </div>
                        <div className="tile is-vertical is-parent">
                            {this.getLinkContent(0)}
                            {this.getLinkContent(2)}
                        </div>
                    </div>

                    {this.getBodyContent()}

                </div>
            </section>
        );
    }

    render() {
        let content;

        if (this.state.authorized)
            content = this.getAuthorizedContent()
        else
            content = (<UnauthorizedBox notifyUnauthorized={this.props.notifyUnauthorized}/>)

        return (content);
    }
}