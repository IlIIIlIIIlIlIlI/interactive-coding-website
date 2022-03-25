import React from "react";
import "./FrontInfo.css";

const FrontInfo: React.FC = () => {
  return (
    <div className="mainDiv">
      <h1 id={'Header'}>Interactive Coding Environment</h1>
      <button
        id={"infoButton"}
        className="button is-rounded is-primary is-small cancelButton hider"
        onClick={() => {
          const element = document.getElementById("innerMainDiv");
          element && element.classList.remove("hider");
          const infoButton = document.getElementById("infoButton");
          infoButton && infoButton.classList.add("hider");
          const cancelButton = document.getElementById("cancelButton");
          cancelButton && cancelButton.classList.remove("hider");
        }}
      >
        <span className="icon">
          <i className="fa fa-info-circle"></i>
        </span>
        <span>Info</span>
      </button>

      <button
        id={"cancelButton"}
        className="button is-rounded is-primary is-small cancelButton"
        onClick={() => {
          const element = document.getElementById("innerMainDiv");
          element && element.classList.add("hider");
          const infoButton = document.getElementById("infoButton");
          infoButton && infoButton.classList.remove("hider");
          const cancelButton = document.getElementById("cancelButton");
          cancelButton && cancelButton.classList.add("hider");
        }}
      >
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
        <span>Cancel</span>
      </button>

      <div id="innerMainDiv">
        <h1>
          This is an interactive coding environment. You can write javascript,
          see it executed and write comprehensive documentation using markdown.
        </h1>
        <ol>
          <li>Click any Text cell to edit it.</li>
          <li>
            The code in each code editor is all joined together into one file.
            If you define a varible in Cell #1, You can refer it in any
            following cell.
          </li>
          <li>
            You can show any React Component, String, Number or anything else by
            calling the <code>show()</code> function.
            <br />
            This is a function built into this environment. You may call{" "}
            <code>show()</code>
            function multiple times to show multiple values.
          </li>
          <li>
            Re-order or delete cells using the buttons on the top right.&emsp;
            <button className="button is-primary is-small">
              <span className="icon">
                <i className="fas fa-arrow-up"></i>
              </span>
            </button>
            <button className="button is-primary is-small">
              <span className="icon">
                <i className="fas fa-arrow-down"></i>
              </span>
            </button>
            <button className="button is-primary is-small">
              <span className="icon">
                <i className="fas fa-times"></i>
              </span>
            </button>
          </li>
          <li>
            Add new cells by hovering on the divider between each cell.&emsp;
            <button className="button is-rounded is-primary is-small">
              <span className="icon is-small">
                <i className="fas fa-plus" />
              </span>
              <span>Code</span>
            </button>
            &emsp;
            <button className="button is-rounded is-primary is-small">
              <span className="icon is-small">
                <i className="fas fa-plus" />
              </span>
              <span>Text</span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FrontInfo;
