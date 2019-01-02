import React from "react";
import { StatusBar } from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content
} from "native-base";
import styles from "../Styles/styles.js";
import HeaderComponent from "../Components/Header.js";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <HeaderComponent headerMessage="Edu Now Home" navigation={this.props.navigation} />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Lets learn something awesome today!</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
              <Text>This is the home page of your truly fantastic app!!!</Text>
              </Body>
            </CardItem>
          </Card>
          </Content>
      </Container>
    );
  }
}