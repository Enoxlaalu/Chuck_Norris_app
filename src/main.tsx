import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import ChuckNorrisAppPage
    from 'src/pages/ChuckNorrisAppPage';
import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk
    from 'redux-thunk';
import rootReducer
    from 'src/redux/reducer';

// Creates a Redux store
const store = createStore(rootReducer,
    // allows you to write action creators that return a function instead of an action
    applyMiddleware(thunk)
);

import 'src/global.less';

const App = () => {
    return (
        // makes the Redux store available to any nested components
        <Provider store={store}>
            <ChuckNorrisAppPage />
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('app'));
