
/**
 * 
 * @param {string} urlFormat 
 * @param {string} urlInstance 
 * @returns {Object} - Returns an object with parameters of an url mapped 
 */
function parseUrl(urlFormat, urlInstance) {

    const [urlParts, queryString] = urlInstance.split('?');

    const urlKeys = urlFormat.split('/');
    const urlValues = urlParts.split('/');

    const result = {};

    for (let i = 0; i < urlKeys.length; i++) {
        const key = urlKeys[i];

        if (key.startsWith(':')) {
            const keyName = key.slice(1);
            let keyValue = urlValues[i];
      
            result[keyName] = isNaN(keyValue) ? keyValue : parseInt(keyValue);
        }
    }

    if (queryString) {
        const queryParams = queryString.split('&');
        queryParams.forEach(param => {
            const [key, value] = param.split('=');
            result[key] = isNaN(value) ? value : parseInt(value);
        });
    }

    return result;
}
  
module.exports = parseUrl
