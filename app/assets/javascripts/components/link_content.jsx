class LinkContent extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.updateVariables(this.props.contentId)
    }

    componentWillReceiveProps(nextProps) {
        this.updateVariables(nextProps.contentId)
    }

    updateVariables(contentId) {
        this.colorClass = ContentVariables.getColorClass(contentId)
        this.iconClass = ContentVariables.getIconClass(contentId)
        this.caption = ContentVariables.getCaption(contentId)
    }

    render() {
        return (
            <div className={`tile is-child notification ${this.colorClass} clickable`} onClick={() => this.props.setTabNumber(this.props.contentId)}>
                <p className="title">
                    <span className="icon is-large"><i className={`fa ${this.iconClass}`}></i></span>
                    <span>&nbsp;{this.caption}</span>
                </p>
            </div>
        );
    }
}
