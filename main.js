/*
 * @Author: songyzh
 * @Date: 2020-11-25 17:35:42
 * @LastEditors: songyzh
 * @LastEditTime: 2020-11-30 15:21:16
 */
import { Component, createElement, render } from "./toy-react";
class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>My Component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div></div>
    <div></div>
  </MyComponent>,
  document.getElementById("root")
);
