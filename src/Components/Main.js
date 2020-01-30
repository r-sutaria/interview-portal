import React from "react";
import {Switch,Route} from 'react-router';
import ExperienceForm from "./interview-form";
import NavbarComponent from "./NavbarComponent";
import ExperienceList from "./ExperienceComponent";
import BlogList from "./BlogsList";
import Sidebar from "./SidebarComponent";
import CodeEditor from "./CodeEditor";

export default function Main() {
    return(
    <Switch>
        <Route exact path={'/'} component={ExperienceForm} />
        <Route exact path={'/practice'} component={CodeEditor} />
        <Route exact path={'/queries'} component={BlogList}/>
    </Switch>
    );
}



