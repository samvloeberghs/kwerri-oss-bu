// service-worker.ts
import {
  initialize,
} from 'workbox-google-analytics';

// basic setup
initialize();

// advanced setup 1
initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});

// advanced setup 2
initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
  hitFilter: (params: URLSearchParams) => {
    const qtSecs = Math.round(+params.get('qt') / 1000);
    params.set('cm1', `${qtSecs}`);
  },
});
