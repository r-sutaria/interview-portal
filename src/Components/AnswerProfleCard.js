import React from "react";
import {Media} from 'reactstrap';

export default function AnswerProfileCard(props) {
    return(
        <Media className={'p-1 m-2'}>
            <Media left top href={'#'}>
                <div className={'px-1 py-2 pb-3'}>
                    <Media
                        object
                        src={props.src}
                        alt={'profile-picture'}
                        style={{width:'64px',height:'64px'}}
                        className={'border border-dark'}
                    />
                </div>
            </Media>
            <Media body className={'my-2'}>
                <Media heading>
                    {props.name}
                </Media>
                {props.description}
            </Media>
        </Media>
    )
}