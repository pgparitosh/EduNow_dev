import React from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab
} from "native-base";
import styles from "../Styles/styles.js";
import CourseDetailsScreen from "./CourseDetailsScreen.js";
import Question from "./Question.js";
import HeaderComponent from "../Components/Header.js";

export default class CourseDetailsTabsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
        <StatusBar hidden />
        <HeaderComponent headerMessage="Course Details" navigation={this.props.navigation} />
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