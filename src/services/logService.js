import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({dsn: "https://3011103fb8b04c4abfac4dea9b357302@o396319.ingest.sentry.io/5249499"});
}

function log( error ){
    Sentry.captureException(error);
}

export default {
    init,
    log
}