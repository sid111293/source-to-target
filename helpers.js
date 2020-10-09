const getKeys = object => {
    try {
        return Object.keys(object)
    } catch (error) {
        return [];
    }
};

const prepareGenericPayload = (data, map) => {
    try {
        return getKeys(map).reduce((result, key) => {
            result[key] = data[map[key]];
            return result;
        }, {});
    } catch (error) {
        return {};
    }
}

module.exports = {
    prepareGenericPayload
};
