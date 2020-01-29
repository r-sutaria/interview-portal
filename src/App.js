import React from 'react';
import './App.css';
import ExperienceForm from "./Components/interview-form";
import NavbarComponent from "./Components/NavbarComponent";
import ExperienceList from "./Components/ExperienceComponent";
import BlogList from "./Components/BlogsList";
import Sidebar from "./Components/SidebarComponent";
export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentPage: <BlogList />,
            user: null,
            users: {
                'user1' : 'password',
                'user2' : 'password1'
            }
        }
    }

    onClickExperience = (event) => {
        this.setState({
            currentPage: <ExperienceList />
        });
        event.preventDefault();
    };

    onClickBlogs = (event) => {
        this.setState({
            currentPage: <BlogList/>
        });
        event.preventDefault();
    };

    onClickLogo = (event) => {
        this.setState({
            currentPage: <ExperienceForm />
        })
        event.preventDefault();
    };

    onClickLogin = (event,username,password) => {
        const users = this.state.users;
        if(users[username] !== undefined) {
            if(password === users[username]) {
                this.setState({
                    user: username
                })
            }
        }
    };

    onClickSignOut = (event) => {
        this.setState({
            user: null
        })
    }

    render() {
        return(
            <div  className={'bg-light'}>
                <NavbarComponent
                    onClickExperience={this.onClickExperience}
                    onClickBlogs = {this.onClickBlogs}
                    onClickLogo = {this.onClickLogo}
                    onClickLogin = {this.onClickLogin}
                    onClickSignOut = {this.onClickSignOut}
                    user = {this.state.user}
                />
                <div style={{display: 'flex', justifyContent: 'space-between',marginTop:57}}>
                    <Sidebar/>
                    <div className={'mr-4'}></div>
                    {this.state.currentPage}
                </div>
            </div>
        );
    }
}