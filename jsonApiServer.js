var http = require('http'),
    url = require('url');

// Serves Json data when receiving a GET request to '/api/parsetime'.
// request will contain query string with iso key.

// The JSON I serve should include only hour, minute, and second properties.

// Second endpoint returns UNIX epoch time in json.
// ex {"unixtime": 1376136615474}