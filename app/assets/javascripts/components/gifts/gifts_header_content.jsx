class GiftsHeaderContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        const colorClass = ContentVariables.getColorClass(2);

        return (
            <div className={`tile is-child notification ${colorClass}`}>
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-gift"></i></span>
                    <span>{ContentVariables.getCaption(2)}</span>
                </p>

                <div className="content">
                    <p>
                        Обязательно взять с собой хорошее настроение. Также берите с собой <s>бахилы</s> тапочки :) Опционально можно чтото подарить. Чтобы не ломать голову, мы с Олей подготовили список вещей, которые наиболее симпатичны нам на сегодняшний день.
                    </p>
                </div>
            </div>
        );
    }
}