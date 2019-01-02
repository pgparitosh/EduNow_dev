import React from "react";
import { StatusBar, Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body
} from "native-base";
import coverImages from "../Images/CourseCoverImages/AllCoverImages.js";
import thumbnails from "../Images/ThumbNails/AllThumbNails.js";
import styles from "../Styles/styles.js";
import HeaderComponent from "../Components/Header.js";

export default class CoursesScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <HeaderComponent headerMessage="All Courses" navigation={this.props.navigation} />
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={thumbnails["01"]} />
                <Body>
                  <Text>Course 1</Text>
                  <Text note>Course 1 tag</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={coverImages["01"]}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Button block success>
                  <Text>Details</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={thumbnails["02"]} />
                <Body>
                  <Text>Course 2</Text>
                  <Text note>Course 2 tag</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={coverImages["02"]}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Button block success>
                  <Text>Details</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
