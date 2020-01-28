import React from "react";
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js';
import {Button} from 'reactstrap';
import styleMap from "../Constants/StyleMap";
import {FaAlignLeft,FaAlignRight} from "react-icons/fa";

export default class AnswerBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            innerWidth: 0,
            innerHeight: 0
        };
    }

    onChange = (editorState) => {
        this.setState({editorState})
    };

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
        const styles = this.state.editorState.getCurrentInlineStyle();
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

    renderButton(style,label) {
        return(
            <Button
                className={'btn-light border-dark border-0 m-1'}
                style={{textDecoration:'none'}}
                key={style}
                size={'md'}
                onMouseDown={(event)=>{
                    event.preventDefault();
                    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
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
        return(
            <div className={'bg-light'}>
                <div className={'mx-3 border-dark rounded-top border border-bottom-0'} style={{width:'70%'}}>
                    <div>
                        {
                            this.buttons.map(
                                (button,index) => this.renderButton(button,this.labels[index])
                            )
                        }
                    </div>
                </div>
                <div className={'border rounded-bottom border-dark mx-3'} style={{width:'70%',minHeight:this.state.innerHeight/3,marginLeft:10,backgroundColor:'#FFFFFF'}}>
                    <div className={'mx-2'}>
                        <DraftEditor
                            editorState={this.state.editorState}
                            customStyleMap={styleMap}
                            onChange={this.onChange}
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
                    className={'mt-1 ml-3'}
                    onClick={(e) => {
                        e.preventDefault();
                        console.log('Submitted');
                    }}
                    size={'sm'}
                >
                    Submit
                </Button>
            </div>
        );
    }
}