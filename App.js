/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';

import RenderHTML from 'react-native-render-html';

const App = () => {
  const tagsStyles = {
    li: {
      color: 'green',
    },
  };
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Internal CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <head>
      <style>
        li {
          color: rgb(235, 107, 86);
          font-size: 20;
        }
      </style>
    </head>
  </head>
  <body>
    <p>
      <span style="color: rgb(235, 107, 86); font-size: 18px"
        ><strong>This is bold, big font</strong></span
      >
    </p>
    <ul>
      <li>unordered list 1</li>
      <li style="color: rgb(235, 107, 86); font-size: 18px">
        unordered list 2 with override inline style
      </li>
    </ul>
  </body>
</html>

  `;
  const {width} = useWindowDimensions();

  return (
    <ScrollView style={{margin: 20}}>
      <RenderHTML
        contentWidth={width}
        source={{html}}
        tagsStyles={tagsStyles}
      />
    </ScrollView>
  );
};

export default App;
