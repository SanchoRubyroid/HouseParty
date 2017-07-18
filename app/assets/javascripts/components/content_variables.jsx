ContentVariables = {

    getColorClass: function(contentId) {
        return(['is-info', 'is-success', 'is-warning'][contentId])
    },

    getIconClass: function(contentId) {
        return(['fa-home', 'fa-map-marker', 'fa-photo'][contentId])
    },

    getCaption: function(contentId) {
        return(["Что происходит", 'Как доехать', 'Что было'][contentId])
    }


}
