'use strict';
import React, { Component } from "react";
import { StatusBar, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import allAppImages from "../../Images/AppImages/AllAppImages.js";
import styles from "../../Styles/styles.js";

class LoginScreen extends Component {

  render() {
    return (
      <Container style={styles.container}>
      <StatusBar hidden />
        {/* <Header>
          <Body>
            <Title style={{alignSelf: "center"}}>Edu Now Login</Title>
          </Body>
        </Header> */}
        <Content>
          <Form>
            <Content style={styles.header}>
              <Image source={allAppImages['logo']} resizeMode="center" style={styles.logo}
                      />
               <Text style={styles.heading}>Edu Now</Text> 
            </Content>

            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block success style={{ margin: 15, marginTop: 50 }}
          >
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;