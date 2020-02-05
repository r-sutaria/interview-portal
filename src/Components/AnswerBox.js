import React from "react";
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import {Button,Media} from 'reactstrap';
import styleMap from "../Constants/StyleMap";
import {FaAlignLeft,FaAlignRight} from "react-icons/fa";
import AnswerProfileCard from "./AnswerProfleCard";
import 'draft-js/dist/Draft.css';

export default class AnswerBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            innerWidth: 0,
            innerHeight: 0
        };
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    updateWindowsDimension = () => {
        this.setState({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
    };

    isActive(style) {
        const styles = this.props.editorState.getCurrentInlineStyle();
        return styles.has(style);
    }

    buttons = ['BOLD','ITALIC','UNDERLINE','H1','H2','H3','H4','H5','LEFT','RIGHT'];
    labels = [
        <b>B</b>,
        <i>I</i>,
        <u>U</u>,
        <span>H1</span>,
        <span>H2</span>,
        <span>H3</span>,
        <span>H4</span>,
        <span>H5</span>,
        <FaAlignLeft/>,
        <FaAlignRight/>
    ];

    renderButton(style,label,onChange) {
        return(
            <Button
                className={'btn-light border-dark border-0 m-1'}
                style={{textDecoration:'none'}}
                key={style}
                size={'md'}
                onMouseDown={(event)=>{
                    event.preventDefault();
                    onChange(RichUtils.toggleInlineStyle(this.props.editorState, style));
                }}
                active={this.isActive(style)}
            >
                {label}
            </Button>
        )
    }

    componentDidMount() {
        this.editor.focus();
        this.updateWindowsDimension();
        window.addEventListener('resize',this.updateWindowsDimension);
    }

    render() {
        const onChange = this.props.onChange;
        return(
            <div className={'mx-3 mb-3'}>
                <AnswerProfileCard
                    src={'/pikachu.jpg'}
                    name={'Rutvik Sutaria'}
                    description={'8th semester CSE student'}
                />
                <div className={'mx-3 border-dark rounded-top border bg-light border-bottom-0'} style={{width:'97%'}}>
                    <div>
                        {
                            this.buttons.map(
                                (button,index) => this.renderButton(button,this.labels[index],onChange)
                            )
                        }
                    </div>
                </div>
                <div className={'border rounded-bottom border-dark mx-3'} style={{width:'97%',minHeight:this.state.innerHeight/3,marginLeft:10,backgroundColor:'#FFFFFF'}}>
                    <div className={'mx-2 p-1'}>
                        <DraftEditor
                            editorState={this.props.editorState}
                            customStyleMap={styleMap}
                            onChange={onChange}
                            handleKeyCommand={this.handleKeyCommand}
                            placeholder={'Type your answer..'}
                            ref={(editor) => {
                                this.editor = editor;
                            }}
                        />
                    </div>
                </div>
                <Button
                    type={'submit'}
                    color={'dark'}
                    className={'mt-1 ml-3 mb-2'}
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.onSubmit();
                    }}
                    size={'sm'}
                >
                    Submit
                </Button>
            </div>
        );
    }
}