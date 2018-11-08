import log from "./log.js";

const hooks = [
    "onLoad",
    "onReady",
    "onShow",
    "onHide",
    "onUnload",
]

export default function createPageParams(route) {
    const params = {};
    hooks.forEach(hook => {
        params[hook] = function () {
            log("Page." + hook + "_" + route);
        }
    });

    params["onShareAppMessage"] = function() {
        return {
            title: route,
            path: this.route
        }
    }

    return params;
}