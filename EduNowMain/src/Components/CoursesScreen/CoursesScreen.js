import React from "react";
import { StatusBar, Image } from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title} from "native-base";
import coverImages from '../../Images/CourseCoverImages/AllCoverImages.js'
import thumbnails from '../../Images/ThumbNails/AllThumbNails.js';
import styles from "../../Styles/styles.js";

export default class CoursesScreen extends React.Component {
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
            <Title style={[styles.alignCenter, styles.textWhite]}>All Courses</Title>
          </Body>
          <Right />
        </Header>
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
                <Thumbnail source={thumbnails['02']} />
                <Body>
                  <Text>Course 2</Text>
                  <Text note>Course 2 tag</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={coverImages['02']} style={{height: 200, width: null, flex: 1}}/>
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