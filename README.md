# WebhooksRoutingFilter
###What it does

​	This module allows easy re-routing of webhooks request based on a json body.  It uses Json-Filter and fetch to match a request and send it to the provided URL.



### Requires

- [node-fetch](https://www.npmjs.com/package/node-fetch)

- [json-filter](https://www.npmjs.com/package/json-filter)



### How To Use It

My main use for this was to create an easy way to grab certain webhook requests and send them to IFTTT.  This allows me to easily specify the type of event, and parameters I am looking for to trigger different events on IFTTT.

Plex and IFTTT Example:

```javascript
var WebhooksRoutingFilter = require('WebhooksRoutingFilter');

WebhooksRoutingFilter(req.body, [
            {
                "url": "https://maker.ifttt.com/trigger/movie_started/with/key/hSUA8cZSDCa0NPJ_t_CcmDXv-IhjYsNMC75n_t6D1Yy", 
                "query": 
                {
                    event: { $only: ['media.play'] },
                    Player:
                    {
                        local: true
                    }
                }
            },
            {
                "url": "https://maker.ifttt.com/trigger/movie_paused/with/key/{MyKey}",
                "query": 
                { 
                    event: 
                    { 
                        $only: ['media.pause'] 
                    },
                    Player:
                    {
                        local: true
                    }
                }
            },
            {
                "url": "https://maker.ifttt.com/trigger/movie_started/with/key/{MyKey}", 
                "query": 
                { 
                    event: 
                    { 
                        $only: ['media.resume'] 
                    },
                    Player:
                    {
                        local: true
                    }
                }
            }
        ]);
```