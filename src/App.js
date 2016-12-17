import React from 'react';
import { connect } from 'react-redux';

import Header from './components/shared/header';
import Login from './components/login';

const App = ({ api, userId }) => {
    // const styles = {
    //     bodyContainer: {
    //         backgroundColor: '#fff',
    //         paddingLeft: 15,
    //         paddingRight: 15,
    //         paddingBottom: 15,
    //         paddingTop: 5
    //     }
    // };
    if(userId) {
        return (
            <div>
                <Header api={api} />
                <h1>Here!</h1>
            </div>
        );
    } else {
        return (
            <div>
                <Login api={api} />
            </div>
        );
    }
};
App.propTypes = {
    userId: React.PropTypes.string,
    api: React.PropTypes.object
};

const AppContainer = connect(
    ({ appState }) => {
        return {
            userId: appState.user._id
        };
    }
)(App);

export default AppContainer;
