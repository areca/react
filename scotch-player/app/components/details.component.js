import React from 'react';
import ReactDOM from 'react-dom';

// Import Search Component
import Search from './components/search.component';

// Import Details Component
import Details from './components/details.component';

// Component Class
class App extends React.Component {
    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <div>
            <Search />
            <Details title={'Track title'} />
          </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(
    <App/ > ,
    document.getElementById('content')
);
