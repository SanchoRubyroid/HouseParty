class WhatHappenedHeaderContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        const colorClass = ContentVariables.getColorClass(2);

        return (
            <div className={`tile is-child notification ${colorClass}`}>
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-photo"></i></span>
                    <span>&nbsp;{ContentVariables.getCaption(2)}</span>
                </p>

                <div className="content">
                    <p>
                        Несколько фоток с новоселля можно нати в <a href="https://photos.app.goo.gl/r8WwmGiZ4cdDj20q2" target="_blank" className={`is-small is-inverted button ${colorClass}`}>этом альбоме</a>. Ниже на этой странице есть небольшое видео с мероприятия.
                        Если у вас есть фотки \ видео с вечеринки, пожалуйста вышлите их на <a href="mailto:alex.areshnikov@gmail.com">alex.areshnikov@gmail.com</a>
                    </p>
                </div>
            </div>
        );
    }
}
