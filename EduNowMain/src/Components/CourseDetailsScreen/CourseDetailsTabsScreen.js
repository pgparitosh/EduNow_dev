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
  Right,
  Tab,
  Tabs,
  ScrollableTab
} from "native-base";
import styles from "../../Styles/styles.js";
import CourseDetailsScreen from "./CourseDetailsScreen.js";
import Question from "../QuizScreen/Question.js";

export default class CourseDetailsTabsScreen extends React.Component {
  render() {
    return (
        <Container>
        <StatusBar hidden />
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
            <Title style={[styles.alignCenter, styles.textWhite]}>Course 1 Details</Title>
          </Body>
          <Right />
        </Header>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab warning heading="Course Details" style={styles.bgYellow}>
            <CourseDetailsScreen />
          </Tab>
          <Tab heading="Take Exam">
            <Question />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}