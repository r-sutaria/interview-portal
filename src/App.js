import React from 'react';
import './App.css';
import ExperienceForm from "./Components/interview-form";
import NavbarComponent from "./Components/NavbarComponent";
export default class App extends React.Component{
    render() {
        return(
            <div  className={'bg-light '}>
                <NavbarComponent />
                <ExperienceForm />
            </div>
        );
    }
}