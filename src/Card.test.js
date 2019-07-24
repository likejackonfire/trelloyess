import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card components', () => {
it("renders without crashing", () => {
    // Create a DOM element to render the component into
    const div = document.createElement("div");
  
    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<Card />, div);
    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
      const tree = renderer
      .create(<Card name="Card" />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });

});