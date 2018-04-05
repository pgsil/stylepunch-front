import React, { Component } from "react";
import "./App.css";

import Item from "./components/Item";
import RocketIcon from "./components/RocketIcon";

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
      <main>
        <div className="App">
          {Object.entries(this.state.styleList).map(el => (
            <Item
              {...el[1]}
              addToList={() => this.addToList(el[0])}
              isEnabled={this.state.checked.includes(el[0])}
            />
          ))}
        </div>

        <button className="btn-get-css" onClick={() => this.getCSS()}>
          <RocketIcon />
          Get custom CSS
        </button>

        {this.state.css && <pre>@import url('{this.state.css}')</pre>}
      </main>
    );
  }
}

export default App;
