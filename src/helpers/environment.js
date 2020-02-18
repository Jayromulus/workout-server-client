let APIURL = ""

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000'
        break;
    case 'workout-client-hosted.herokuapp.com':
        APIURL = 'https://workout-server-hosting.herokuapp.com'
}

export default APIURL