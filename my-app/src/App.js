import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return ( <
        div className = "App" >
        <
        div className = "container" >
        <
        Weather defaultCity = "New York" / >
        <
        footer >
        This project was coded by Mitra Toghtamesh and is { " " } <
        a href = "https://github.com/mitra0079/weatherReact"
        target = "_blank"
        rel = "noreferrer" >
        open - sourced on Github { " " } <
        /a>{" "} <
        /footer>{" "} <
        /div>{" "} <
        /div>
    );
}