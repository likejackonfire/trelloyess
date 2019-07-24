import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
    // Create a DOM element to render the component 
    const div = document.createElement("div");
  
    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<App />, div);
    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

 //screenshot test
 it('renders the UI as expected', () => {
    const tree = renderer
      .create( <App name="app" /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });