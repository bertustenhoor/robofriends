import React from 'react';
import { robots } from './source';
import CardList from './CardList';

const App = () => {
    return <CardList robots={robots} />
}

export default App;