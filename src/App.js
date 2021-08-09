import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a front end js framework",
  },
  {
    title: "Why use React",
    content: "React is fav Js library",
  },
  {
    title: "How do you use React",
    content: "Leran more",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
