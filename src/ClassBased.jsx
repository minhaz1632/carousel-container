import React, { Component } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";

export default class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: true,
      pressed: "prev",
    };
  }

  render() {
    const { state, pressed } = this.state;
    return (
      <>
        <div className="row">
          <button
            className="btn btn-primary"
            onClick={() =>
              this.setState({ pressed: "prev" }, () =>
                this.setState({ state: !state })
              )
            }
          >
            Prev
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              this.setState({ pressed: "next" }, () =>
                this.setState({ state: !state })
              )
            }
          >
            Next
          </button>
        </div>
        <br />
        <div className="main">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={state}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames={pressed}
            >
              <div className="button-container">
                <Button>{state ? "Hello, world!" : "Goodbye, world!"}</Button>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </>
    );
  }
}
