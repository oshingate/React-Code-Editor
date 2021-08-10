import React, { Component } from 'react';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let srcDoc = `
      <html>
        <body>${this.props.html}</body>
        <style>${this.props.css}</style>
        
      </html>
      `;
    return (
      <div className='iframe-div'>
        <iframe srcDoc={srcDoc} frameborder='0' title='output'></iframe>
      </div>
    );
  }
}

export default Output;
