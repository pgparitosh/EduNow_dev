import React from "react";
import { StatusBar, Image } from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title} from "native-base";
import styles from "../../Styles/styles.js";
import coverImages from '../../Images/CourseCoverImages/AllCoverImages.js'
import thumbnails from '../../Images/ThumbNails/AllThumbNails.js';

export default class CourseDetailsScreen extends React.Component {
  render() {
    return (
        <Content padder>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={thumbnails['01']} />
                <Body>
                  <Text>Course 1</Text>
                  <Text note>Course 1 tag</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={coverImages['01']} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem header bordered>
              <Text>Course 1</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Video Link</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  http://youtube.com/myvideo
                </Text>
              </Body>
            </CardItem>
          </Card>  
        </Content>
    );
  }
}