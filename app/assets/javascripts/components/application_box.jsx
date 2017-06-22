class ApplicationBox extends React.Component {
    constructor() {
        super();

        this.state = {
            authorized: false,
            username: 'Unknown',
            tabNumber: 0
        }

        // this.contentSelector = new ContentSelector(0, this.setTabNumber.bind(this))
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
        // this.contentSelector.set(tabNumber)
    }

    getContent() {
        if (this.state.authorized)
            return (
                <div>
                    {this.getAuthorizedContent()}
                </div>)
        else
            return (<UnauthorizedBox notifyUnauthorized={this.props.notifyUnauthorized}/>)
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

    getLink1Content() {
        if (this.state.tabNumber == 0)
            return (<DirectionsLinkContent setTabNumber={this.setTabNumber.bind(this)}/>)
        else
            return (<WhatHappensLinkContent setTabNumber={this.setTabNumber.bind(this)}/>)
    }

    getLink2Content() {
        if (this.state.tabNumber == 2)
            return (<DirectionsLinkContent setTabNumber={this.setTabNumber.bind(this)}/>)
        else
            return (<GiftsLinkContent setTabNumber={this.setTabNumber.bind(this)}/>)

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
                            {/*{this.contentSelector.getHeaderContent()}*/}
                            {this.getHeaderContent()}
                        </div>
                        <div className="tile is-vertical is-parent">
                            {/*{this.contentSelector.getLink1Content()}*/}
                            {this.getLink1Content()}
                            {/*{this.contentSelector.getLink2Content()}*/}
                            {this.getLink2Content()}
                        </div>
                    </div>

                    {/*{this.contentSelector.getBodyContent()}*/}
                    {this.getBodyContent()}

                </div>
            </section>
        );
    }

    render() {
        return (this.getContent());
    }
}