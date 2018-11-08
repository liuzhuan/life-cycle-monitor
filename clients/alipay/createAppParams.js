import log from "./log.js";

const hooks = [
    "onLaunch",
    "onShow",
    "onHide",
    "onError",
]

export default function createAppParams() {
    const params = {};
    hooks.forEach(hook => {
        params[hook] = function () {
            log("App." + hook);
        }
    });

    return params;
}