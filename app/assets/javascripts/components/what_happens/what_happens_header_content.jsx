class WhatHappensHeaderContent extends React.Component {
    constructor() {
        super();

        this.state = {
            coming: false,
            comingLoading: false
        }
    }

    handleComing() {
        this.setState({comingLoading: true})

        axios.get('/set_coming')
            .then(function () {
                this.setState({coming: true, comingLoading: false})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const colorClass = ContentVariables.getColorClass(0);

        return (
            <div className={`tile is-child notification ${colorClass}`}>
                <p className="title">
                    <span className="icon is-large"><i className="fa fa-home"></i></span>
                    <span>{ContentVariables.getCaption(0)}</span>
                </p>

                <div className="content">
                    <p>Дорогие друзья! Мы рады пригласить вас на наше новоселье, которое состоится в субботу 07/22/2017.
                        Начало в 6:00pm.</p>
                </div>

                {/*<div className="content has-text-centered">*/}
                    {/*<a className={`button ${colorClass} ${this.state.comingLoading ? 'is-loading' : 'is-inverted is-outlined'} ${this.state.coming && 'is-static'}`}*/}
                       {/*disabled={this.state.coming} onClick={this.handleComing.bind(this)}>*/}
                        {/*{this.state.coming && (<span className="icon"><i className="fa fa-check"></i></span>)}*/}
                        {/*<span>Я с удовольствием приду!</span>*/}
                    {/*</a>*/}
                {/*</div>*/}
            </div>
        );
    }
}