# CORS Proxy

## Setup:
```npm install```

## Usage:
```node ./cors-proxy.js --origin=http://localhost:3000 --port=3001```

Once running, the request URL needs to be of the following format:
```http://localhost:<port>/?url=<url to proxy>```

For example: http://localhost:3001/?url=https://www.google.com/search?q=kawhi+leonard
