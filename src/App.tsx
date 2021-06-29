import React from 'react';
import './App.css';
import CommonList from './components/CommonList';
import SavedList from "./components/SavedList";
import {Provider} from "react-redux";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <div className={'app'}>
                <div className="container">
                    <div className={'halfWidth'}>
                        <h2>Results</h2>
                        <CommonList/>
                    </div>
                    <div className={'halfWidth'}>
                        <h2>Saved Properties</h2>
                        <SavedList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
