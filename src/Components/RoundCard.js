import React from 'react';
import {Button, FormGroup, Input, Label,Row,Col} from 'reactstrap';
import {FaTrashAlt} from "react-icons/fa";
import './RoundCard.css';
export default function RoundCard(props) {
    const {id,onClick,onChangeTitle,onChangeDetails,round} = props;
    return(
        <FormGroup className={'border border-dark p-2 rounded'}>
            <Row>
                <Col md={12}/>
                <Col >
                    <Button
                        className={'btn-sm float-right m-1'}
                        color={'danger'}
                        onClick={(event) => {
                            onClick(event,round);
                        }}
                    >
                        <FaTrashAlt/>
                    </Button>
                </Col>
            </Row>
            <Row form={true} className={'my-2 mr-2'}>
                <Col md={1}>
                    <Label
                        for={'title'+id}
                    >
                        <b>Round Title</b>
                    </Label>
                </Col>
                <Col md={11}>
                    <Input
                        id={'title'+id}
                        type={'text'}
                        name={'test'}
                        value={round.title}
                        onChange={(event) => {
                            onChangeTitle(event,round)
                        }}
                    />
                </Col>
            </Row>
            <Row form={true} className={'my-2 mr-2'}>
                <Col sm={1}>
                    <Label
                        for={'details'+id}
                    >
                        <b>Round Details</b>
                    </Label>
                </Col>
                <Col md={11}>
                    <Input
                        id={'details'+id}
                        type={'textarea'}
                        name={'text'}
                        rows={5}
                        value={round.details}
                        onChange={(event) => {
                            onChangeDetails(event,round)
                        }}
                    />
                </Col>
            </Row>
        </FormGroup>
    );
};