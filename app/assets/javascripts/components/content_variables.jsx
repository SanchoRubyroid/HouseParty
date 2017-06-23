class ContentVariables {
    constructor(contentId) {
        this.contentId = contentId;
    }

    getColorClass() {
        const colorClasses = ['is-info', 'is-success', 'is-warning']
        return(colorClasses[this.contentId])
    }

    getIconClass() {
        const iconClasses = ['fa-home', 'fa-map-marker', 'fa-gift']
        return(iconClasses[this.contentId])
    }

    getCaption() {
        const captions = ["What's happening?", 'Directions', 'Gift list']
        return(captions[this.contentId])
    }
}