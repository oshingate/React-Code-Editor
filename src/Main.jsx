import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import Output from './Output';

require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '<center>\n  <img src="https://cutt.ly/JbMvJKT" />\n  <h1>Hello World!</h1>\n</center>',
      css: `h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: auto;\n  border-radius: 20px;\n  margin-top:5rem;\n}`,
    };
  }
  render() {
    return (
      <div className='flex main-div'>
        <div className='code-div flex-50'>
          <div className='each-editor'>
            <div className='flex jsb editor-heading'>
              <h4>Editor</h4>
              <h3>HTML</h3>
            </div>
            <CodeMirror
              className='editor'
              value={this.state.html}
              options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                console.log('html before', value);

                this.setState({ html: value });
              }}
              onChange={(editor, data, value) => {}}
            />
          </div>
          <div className='each-editor'>
            <div className='flex jsb editor-heading'>
              <h4>Editor</h4>
              <h3>CSS</h3>
            </div>
            <CodeMirror
              className='editor'
              value={this.state.css}
              options={{
                mode: 'css',
                theme: 'material',
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ css: value });
              }}
              onChange={(editor, data, value) => {}}
            />
          </div>
        </div>
        <div className='flex-50'>
          <Output html={this.state.html} css={this.state.css} />
        </div>
      </div>
    );
  }
}

export default Main;
