import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Loader
    from 'src/components/Loader';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';

import 'src/global.less';
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

const ChuckNorrisAppContainer = React.lazy(() => import('src/pages/containers/ChuckNorrisAppContainer'));

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
