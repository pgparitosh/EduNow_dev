import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import styles from "../../Styles/styles.js";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Header style={styles.screenHeader}>
          <Left>
            <Button light
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={[styles.alignCenter, styles.textWhite]}>Edu Now Home</Title>
          </Body>
          <Right />
        </Header>
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