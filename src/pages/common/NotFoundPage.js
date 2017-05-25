import React, { Component } from 'react';
import { IndexLink } from 'react-router';

export default class NotFoundPage extends Component { 
    render() {
        return (
            <div>
              <h4>
                404 Page Not Found
              </h4>
              <IndexLink to="/"> Go back to homepage </IndexLink >
            </div>
          );
    }
}