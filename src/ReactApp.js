import React from 'react';
import books from './React_SBsample/books';
import ListLoop from './React_SBsample/ListLoop';

const ReactApp = () => {
    return (
        <ListLoop list={books} />
    )
}

export default ReactApp;