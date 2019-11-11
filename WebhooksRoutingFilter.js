var jsonFilter = require('json-filter');
var fetch = require('node-fetch');

module.exports = function webhookRouterHandler (reqData, filterArray) {
    filterArray.forEach(element => {
        if(jsonFilter(reqData, element.query))
        {
            element.url.forEach(item => {
                fetch(item, {
                    method: 'POST',
                    body: reqData
                });
            });
        }
    });
}