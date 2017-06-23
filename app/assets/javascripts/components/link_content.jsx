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
        const contentVariables = new ContentVariables(contentId)
        this.colorClass = contentVariables.getColorClass()
        this.iconClass = contentVariables.getIconClass()
        this.caption = contentVariables.getCaption()
    }

    render() {
        return (
            <div className={`tile is-child notification ${this.colorClass} clickable`} onClick={() => this.props.setTabNumber(this.props.contentId)}>
                <p className="title">
                    <span className="icon is-large"><i className={`fa ${this.iconClass}`}></i></span>
                    <span>{this.caption}</span>
                </p>
            </div>
        );
    }
}
