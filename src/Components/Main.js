import React from "react";
import {Switch,Route} from 'react-router';
import ExperienceForm from "./interview-form";
import NavbarComponent from "./NavbarComponent";
import ExperienceList from "./ExperienceComponent";
import BlogList from "./BlogsList";
import Sidebar from "./SidebarComponent";
import CodeEditor from "./CodeEditor";
import PlacementReport from "./PlacementReport";

export default function Main() {
    return(
    <Switch>
        <Route exact path={'/'} component={ExperienceForm} />
        <Route exact path={'/practice'} component={CodeEditor} />
        <Route exact path={'/queries'} component={BlogList}/>
        <Route exact path={'/placement-report-2019'} component={()=><PlacementReport chartData={[12, 19, 3, 5, 2, 3]} />}/>
    </Switch>
    );
}



