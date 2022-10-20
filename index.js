function res() {
    const results = ["heads", "tails"];
    const res = results[Math.floor(Math.random() * results.length)];

    return res;
}

module.exports = res;
