import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Loader
    from 'src/components/Loader';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
const ChuckNorrisAppContainer = React.lazy(() => import('src/pages/ChuckNorrisAppPage'));
import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk
    from 'redux-thunk';
import rootReducer
    from 'src/redux/reducer';

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);

import 'src/global.less';

const App = () => {
    return (
        <Provider store={store}>
            <React.Suspense fallback={<Loader />}>
                <ChuckNorrisAppContainer />
            </React.Suspense>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('app'));
