class DirectionsHeaderContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="tile is-child notification is-success is-bold">
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-map-marker"></i></span>
                    <span>{ContentVariables.getCaption(1)}</span>
                </p>

                <div className="columns">
                    <div className="column">
                        <a className="button is-success is-inverted is-outlined is-fullwidth" target="_blank"
                           href="https://www.google.com/maps/dir/Current+Location/40.491750,-111.999694">
                            <span>Открыть в Google Maps</span>
                        </a>
                    </div>
                    <div className="column">
                        <a className="button is-success is-inverted is-outlined is-fullwidth" target="_blank"
                           href="http://maps.apple.com/maps?saddr=Current%20Location&daddr=40.491750,-111.999694">
                            <span>Открыть в Apple Maps</span>
                        </a>
                    </div>
                </div>

                <div className="content">
                    <p>
                        <strong>AHTUNG:</strong>&nbsp;Так как дом новый, нашего адреса не существует ни в Google Maps,
                        ни в Apple Maps. На сегодняшний день самый точный адресс: <strong>40°29'30.3"N
                        111°59'58.9"W</strong>. По приезду в эту локацию ищите дом с циферками&nbsp;
                        <strong>4562</strong>
                    </p>
                </div>
            </div>
        );
    }
}