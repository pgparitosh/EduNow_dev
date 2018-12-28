import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>
            Click Me
          </Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
