import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import Global from "./injectGlobal";
import { theme } from "./theme";

class App extends React.Component {
  state = {
    isLight: true,
    title: "Light Theme",
    theme: theme.LIGHT
  };

  _toggleTheme = () => {
    const { isLight } = this.state;
    const title = isLight ? "Dark Theme" : "Light Theme";
    const newTheme = isLight ? theme.DARK : theme.LIGHT;
    this.setState({
      isLight: !isLight,
      title,
      theme: newTheme
    });
  };

  render() {
    const { title, theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Global>
          <React.Fragment>
            <h1>{title}</h1>
            <button onClick={this._toggleTheme}>Toggle Theme</button>
          </React.Fragment>
        </Global>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
