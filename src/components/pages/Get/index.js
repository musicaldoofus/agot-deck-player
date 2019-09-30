import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import GetRoot from './GetRoot';
import GetDecks from './GetDecks';
import GetCards from './GetCards';

const Get = ({match}) => {
    return (
        <Fragment>
            <Route
                exact
                path={match.url}
                component={GetRoot}
            />
            <Route
                path={`${match.url}/decks/:id`}
                component={GetDecks}
            />
            <Route
                path={`${match.url}/cards/:id`}
                component={GetCards}
            />
        </Fragment>
    );
}

export default Get;