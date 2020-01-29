import React from 'react';
import {Editor} from "draft-js";
import AnswerProfileCard from "./AnswerProfleCard";

export default function AnswerCard(props){
    return(
        <div className={'m-3 mr-5 border-top'}>
            <AnswerProfileCard
                src={'/pikachu.jpg'}
                name={'Rutvik Sutaria'}
                description={'8th semester CSE student'}
            />
            <div className={'m-3'}>
                <Editor editorState={props.editorState} readOnly={true}/>
            </div>
        </div>
    )
}