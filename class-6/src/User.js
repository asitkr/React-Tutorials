//Creating HTML element without using JSX

import React from "react";

export default function User() {
    return(
        React.createElement(React.Fragment, null, React.createElement('h1', null, 'Creating HTML element without using JSX'), React.createElement('p', null, 'Name is Ashit'), React.createElement('h3', null, 'Learning ReactJs'))
    );
}

//Yes, we can use JSX without React also. All we need to do is create a function that takes parameters and creates real DOM nodes that we can add to our DOM.