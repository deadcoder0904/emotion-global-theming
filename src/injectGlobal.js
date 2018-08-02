import React from "react";
import { injectGlobal } from "react-emotion";
import { withTheme } from "emotion-theming";

class Global extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.theme.bgColor !== prevProps.theme.bgColor) {
      window.document.body.style.backgroundColor = this.props.theme.bgColor;
    }
    if (this.props.theme.textColor !== prevProps.theme.textColor) {
      window.document.body.style.color = this.props.theme.textColor;
    }
  }

  render() {
    injectGlobal`
      color: ${this.props.theme.textColor};
      background-color: ${this.props.theme.bgColor};
    `;
    return React.Children.only(this.props.children);
  }
}

export default withTheme(Global);
