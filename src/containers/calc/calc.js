import React, { Component } from 'react';
import Button from '../../components/button/button';
import { Layout, Input } from 'element-react/next';
import './calc.css'


class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { symbol: "c", cols: 3, action: this.reset },
        { symbol: "/", cols: 1, action: this.addToCurrent },
        { symbol: "7", cols: 1, action: this.addToCurrent },
        { symbol: "8", cols: 1, action: this.addToCurrent },
        { symbol: "9", cols: 1, action: this.addToCurrent },
        { symbol: "*", cols: 1, action: this.addToCurrent },
        { symbol: "4", cols: 1, action: this.addToCurrent },
        { symbol: "5", cols: 1, action: this.addToCurrent },
        { symbol: "6", cols: 1, action: this.addToCurrent },
        { symbol: "-", cols: 1, action: this.addToCurrent },
        { symbol: "1", cols: 1, action: this.addToCurrent },
        { symbol: "2", cols: 1, action: this.addToCurrent },
        { symbol: "3", cols: 1, action: this.addToCurrent },
        { symbol: "+", cols: 1, action: this.addToCurrent },
        { symbol: "0", cols: 2, action: this.addToCurrent },
        { symbol: ".", cols: 1, action: this.addToCurrent },
        { symbol: "=", cols: 1, action: this.result },
      ],
      current: 0,
      previous: [],
      nextIsReset: false
    }
  }

  addToCurrent = (symbol) => {
    console.log(symbol);
    
    if (["/", "-", "+", "*"].indexOf(symbol) > -1) {
      let {previous} = this.state;
      previous.push(this.state.current + symbol);
      this.setState({ previous, nextIsReset: true })
    }
    else {
      if ((this.state.current === 0 && this.state.current !== "." ) || this.state.nextIsReset) {
        this.setState({ current: symbol, nextIsReset: false });
      } else {
        this.setState({ current: this.state.current + symbol });
      }
    }
  }

  reset = () => {
    this.setState({ current: 0, previous: [], nextIsReset: false })
  }

  result = () => {
    console.log("ay7aga");
    
    let { current, previous } = this.state;
    if (previous.length > 0) {
      current = eval(String(previous[previous.length - 1] + current));
      this.setState({ current, previous : [], nextIsReset: true })
    }
  }


  render() {
    const btns = this.state.buttons.map((btn, i) => (
      <Button
        key={i}
        symbol={btn.symbol}
        action={(symbol) => { btn.action(symbol) }}
        cols={btn.cols}
      />
    ));

    return (
      <>
        <Layout.Row>
          <Input type="text" value={this.state.current} ></Input>
        </Layout.Row>
        <Layout.Row >

          {btns}

        </Layout.Row>
      </>
    );
  }
}

export default Calc;
