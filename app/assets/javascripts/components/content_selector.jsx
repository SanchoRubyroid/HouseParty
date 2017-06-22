class ContentSelector {
    constructor(contentNumber, setContentSelector) {
        this.contentNumber = contentNumber;
        this.setContentSelector = setContentSelector;
    }

    set(contentNumber) {
        this.contentNumber = contentNumber
    }

    getHeaderContent() {
        return([(<WhatHappensHeaderContent/>), (<DirectionsHeaderContent/>), (<GiftsHeaderContent/>)][this.contentNumber])
    }

    getLink1Content() {
        return([(<DirectionsLinkContent setContentSelector={this.setContentSelector}/>), (<WhatHappensLinkContent setContentSelector={this.setContentSelector}/>), (<WhatHappensLinkContent setContentSelector={this.setContentSelector}/>)][this.contentNumber])
    }

    getLink2Content() {
        return([(<GiftsLinkContent setContentSelector={this.setContentSelector}/>), (<GiftsLinkContent setContentSelector={this.setContentSelector}/>), (<DirectionsLinkContent setContentSelector={this.setContentSelector}/>)][this.contentNumber])
    }

    getBodyContent() {
        return([(<WhatHappensBodyContent/>), (<DirectionsBodyContent/>), (<GiftsBodyContent/>)][this.contentNumber])
    }
}