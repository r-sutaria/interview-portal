import React from "react";
import AnswerBox from "./AnswerBox";
import {Media} from "reactstrap";
import '../Images/pikachu.jpg';
export default function BlogList(props) {
    return(
        <div className={'bg-light'}>
            <Media className={'m-1'}>
                <Media left top href={'#'}>
                    <div >
                        <Media
                            object
                            src={'/pikachu.jpg'}
                            alt={'profile-picture'}
                            style={{width:'64px',height:'64px'}}
                            className={'border border-dark ml-3 my-2 mr-1'}
                        />
                    </div>
                </Media>
                <Media body className={'my-2'}>
                    <Media heading>
                        Rutvik Sutaria
                    </Media>
                    8th semester CSE student
                </Media>
            </Media>
            <AnswerBox />
        </div>
    )
}