import React from "react";
import {Switch,Route} from 'react-router';
import ExperienceForm from "./interview-form";
import NavbarComponent from "./NavbarComponent";
import ExperienceList from "./ExperienceComponent";
import BlogList from "./BlogsList";
import Sidebar from "./SidebarComponent";
import CodeEditor from "./CodeEditor";
import PlacementReport from "./PlacementReport";
import ExperiencePage from "./ExperiencePage";
import MyEditor from "./MyEditor";
import AnswerBox from "./AnswerBox";
import QueryPageComponent from "./QueryPageComponent";

export default function Main() {
    return(
    <Switch>
        <Route exact path={'/'} component={ExperienceForm} />
        <Route exact path={'/practice'} component={CodeEditor} />
        <Route exact path={'/queries'} component={QueryPageComponent}/>
        <Route exact path={'/experiences'} component={ExperienceList} />
        <Route exact path={'/experience1'} component={ExperiencePage} />
        <Route exact path={'/query1'} component={BlogList} />
        <Route exact path={'/placement'}
               component={
                   () => <PlacementReport
                       branchChartData={[50,60,70, 70, 70, 70, 70, 70]}
                       classChartData={[20,50,100,200]}
                       yearChartData={[120,160,180,200]}
                       branchLabels = {['Computer Engineering', 'Information Technology', 'Electronics & Communication', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Integration & Circuits']}
                       classLabels = {['Class A', 'Class B', 'Class C', 'Class D']}
                       yearLabels = {['2016','2017','2018','2019']}
                       options= {{
                           responsive: true,
                           legend: {
                               labels: {
                                   display: false,
                                   fontColor: 'black',
                                   fontSize: 13,
                               }
                           }
                       }}
                   />
               }
        />
    </Switch>
    );
}



