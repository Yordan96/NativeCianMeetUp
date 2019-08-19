import React from 'react';
import {Text} from 'react-native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { segundos: 0 };
  }

  tick() {
    this.setState(state => ({
      segundos: state.segundos + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Text>
        Segundos: {this.state.segundos}
      </Text>
    );
  }
}
export default Timer
