class GiftItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        const image_src = this.props.image_src;

        return (
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-128x128 is-hidden-mobile">
                                    <img src={image_src}/>
                                </p>

                                <p className="image is-64x64 is-hidden-tablet">
                                    <img src={image_src}/>
                                </p>
                            </figure>

                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{this.props.caption}</strong>
                                        <p>{this.props.description}</p>
                                    </p>
                                </div>

                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item tooltip">
                                            <span className="tooltiptext tooltip-top">Можно нести сколько угодно</span>
                                            <span>Лимит (∞)</span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                                        </a>
                                        <a className="level-item">
                                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}