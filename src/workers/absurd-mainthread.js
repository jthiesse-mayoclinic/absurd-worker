// READ ME: Next line is uber import to have
// eslint-disable-next-line import/no-webpack-loader-syntax
import makeworker from 'workerize-loader!./absurd-worker';

const absurdWorker = makeworker();

absurdWorker.addEventListener('message', m => console.log('Message From Absurd', m));