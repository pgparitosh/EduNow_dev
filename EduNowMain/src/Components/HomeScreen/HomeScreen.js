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

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{alignSelf: "center"}}>Edu Now Home</Title>
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