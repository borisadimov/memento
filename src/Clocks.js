import React from 'react';

function getTimeleft() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  return `${h > 13 ? '0': ''}${23 - h}:${m > 50 ? '0' : ''}${m === 0 ? "00" : 60-m}:${s > 50 ? '0' : ''}${s===0 ? "00" : 60-s}`
}


class Clocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: getTimeleft()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: getTimeleft()

    });
  }
  render() {
    return (
      <p className="App-clock">
        Time left <br/> {this.state.time}
      </p>
    );
  }

}

export default Clocs;
