class GiftItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        const image_src = this.props.image_src;

        return (
            <div className="tile is-parent">
                <div className="box is-child is-fullwidth">
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
                    </div>
                </article>
            </div>
            </div>
        )
    }
}