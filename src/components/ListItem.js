import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {
  render() {
    const { titleStyle } = style;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,

  }
});
