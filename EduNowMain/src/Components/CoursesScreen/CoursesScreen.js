import React from "react";
import { StatusBar, Image } from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title} from "native-base";
import coverImages from '../../Images/CourseCoverImages/AllCoverImages.js'
import thumbnails from '../../Images/ThumbNails/AllThumbNails.js';

export default class CoursesScreen extends React.Component {
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
            <Title>All Courses</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={thumbnails['01']} />
                <Body>
                  <Text>Fantastic Course</Text>
                  <Text note>I am fantastic</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={coverImages['01']} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Button full dark>
                        <Text>Details</Text>
                    </Button>
                </Body>
            </CardItem>
          </Card> 
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={thumbnails['02']} />
                <Body>
                  <Text>Amazing Course</Text>
                  <Text note>This course is amazing</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={coverImages['02']} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Button full dark>
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