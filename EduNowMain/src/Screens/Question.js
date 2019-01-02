import React from "react";
import { Image } from "react-native";
import { Content, ListItem, Body, Button, CheckBox, Text } from "native-base";
import styles from "../Styles/styles.js";
import allAppImages from "../Images/AppImages/AllAppImages.js";

let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: "option3",
        options: {
          option1: "Java",
          option2: "PHP",
          option3: "Javascript",
          option4: "IOS"
        },
        question: "React is a ____ library"
      },
      question2: {
        correctoption: "option4",
        options: {
          option1: "XML",
          option2: "YML",
          option3: "HTML",
          option4: "JSX"
        },
        question: "____ tag syntax is used in React"
      }
    }
  }
};

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(function(k) {
      return jdata[k];
    });
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0,
      checkBoxChecked: [],
      numberOfQuestions: Object.keys(jdata).length,
      correctAnswers: 0,
      quizFinished: false,
      percentageScored: 0
    };
  }

  onCheckBoxPress(id) {
    let checkboxes = this.state.checkBoxChecked;
    if (checkboxes.includes(id)) {
      let index = checkboxes.indexOf(id);
      checkboxes.splice(index, 1);
    } else {
      checkboxes.push(id);
    }
    this.setState({
      checkBoxChecked: checkboxes
    });
  }

  nextQuestion() {
    let selectedAnswer = this.state.checkBoxChecked[0];
    if (selectedAnswer === this.state.correctoption) {
      this.setState({
        correctAnswers: ++this.state.correctAnswers
      });
    }
    if (this.qno < this.state.numberOfQuestions - 1) {
      this.qno++;
      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
        checkBoxChecked: []
      });
    } else {
      this.setState({
        percentageScored:
          (this.state.correctAnswers * 100) / this.state.numberOfQuestions,
        quizFinished: true
      });
    }
  }

  render() {
    this.buttonPress = false;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(k => {
      return (
        <ListItem
          key={k}
          style={styles.margin10}
          onPress={() => this.onCheckBoxPress(k)}
        >
          <CheckBox
            color="green"
            checked={this.state.checkBoxChecked.includes(k) ? true : false}
          />
          <Body>
            <Text>{currentOptions[k]}</Text>
          </Body>
        </ListItem>
      );
    });

    if (this.state.quizFinished) {
      return (
        <Content style={styles.header}>
          <Image
            source={allAppImages["resultImage"]}
            resizeMode="center"
            style={styles.logo}
          />
          <Text style={styles.resultText}>
            Congratulations. You have scored {this.state.percentageScored}%
          </Text>
        </Content>
      );
    } else {
      return (
        <Content style={styles.questionContainer}>
          <Text style={[styles.questionText]}>
            {this.qno + 1}. {this.state.question}
          </Text>
          {options}
          <Button
            success
            block
            style={styles.margin10}
            disabled={this.state.checkBoxChecked.length > 0 ? false : true}
            onPress={() => this.nextQuestion()}
          >
            <Text>
              {this.qno === this.state.numberOfQuestions - 1
                ? "Finish"
                : "Next"}
            </Text>
          </Button>
        </Content>
      );
    }
  }
}
