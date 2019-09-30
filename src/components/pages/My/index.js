import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MyRoot from './MyRoot';
import MyDecks from './MyDecks';
import MyCards from './MyCards';

const My = (props) => {
    return (
        <Fragment>
            <Route
                exact
                path={props.match.url}
                component={MyRoot}
            />
            <Route
                path={`${props.match.url}/decks/:id`}
                component={MyDecks}
            />
            <Route
                path={`${props.match.url}/cards/:id`}
                component={MyCards}
            />
        </Fragment>
    )
}

export default My;