const instances = {}

const PopupManager = {
    zIndex: 19900420,

    getInstance: function (id) {
        return instances[id]
    },

    register: function () {
        instances[id] = instance
    },

    deregister: function (id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },

    nextZIndex: function () {
        return PopupManager.zIndex++;
    }
}

export default PopupManager