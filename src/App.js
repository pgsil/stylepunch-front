import React, { Component } from "react";
import "./App.css";

import Item from "./components/Item";

import { getStyleList, getCustomCSS } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { styleList: {}, checked: [], css: null };
  }

  componentDidMount = async () => {
    this.setState({ styleList: await getStyleList() });
  };

  addToList = styleName => {
    let checkedItems = [...this.state.checked];

    if (checkedItems.includes(styleName)) {
      const index = checkedItems.indexOf(styleName);

      checkedItems.splice(index, 1);
    } else {
      checkedItems.push(styleName);
    }

    this.setState({ checked: checkedItems });
  };

  getCSS = async () => {
    const chosenStyles = [...this.state.checked];

    const stylesString = chosenStyles.join(",");

    const cssUrl = await getCustomCSS(stylesString);

    this.setState({ css: cssUrl });
  };

  render() {
    return (
      <div className="App">
        {Object.entries(this.state.styleList).map(el => (
          <Item
            {...el[1]}
            addToList={() => this.addToList(el[0])}
            isEnabled={this.state.checked.includes(el[0])}
          />
        ))}

        <button onClick={() => this.getCSS()}>Get custom CSS</button>

        {this.state.css && <pre>{this.state.css}</pre>}
      </div>
    );
  }
}

export default App;
