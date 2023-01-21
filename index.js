function result() {
    console.warn("[WARN] CoinflipJS has been deprecated, please consider using Easy Script (https://easyscript.dev) instead.");

    return Math.random() >= 0.5 ? "heads" : "tails";
}

module.exports = result;
