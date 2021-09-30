import React from "react";
import './App.css';
import Form from "./components/Form";
import {Wrapper} from "./style";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Wrapper>
                <Header/>
                <Form/>
            </Wrapper>
        </Router>

    );
}

export default App;
