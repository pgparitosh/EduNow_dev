import React from "react";
import { Header, Title, Left, Icon, Right, Button, Body } from "native-base";
import styles from "../Styles/styles.js";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMessage: ""
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <Header style={styles.screenHeader}>
        <Left>
          <Button
            light
            transparent
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={[styles.alignCenter, styles.textWhite]}>
            {this.props.headerMessage}
          </Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
