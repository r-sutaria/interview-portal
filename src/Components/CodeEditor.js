import React from "react";
import AceEditor from "react-ace";
import {Card, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Button} from 'reactstrap';
import {MdRestore} from "react-icons/all";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-xcode";

export default class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            mode: 'c_cpp',
            theme: 'twilight',
            fontSize: 16,
            height: '400px',
            width: '900px',
            language: 'C'
        }
    }

    mode_map = {
        'c' : 'c_cpp',
        'cpp': 'c_cpp',
        'java': 'java',
        'python2.7': 'python',
        'python3.0': 'python',
        'kotlin': 'kotlin'
    }

    onChange = (value) => {
        this.setState({value})
    };

    render() {
        return(
            <div className={'container'}>
                <div className={'ml-3 mt-2'}>
                    <div className={'mb-5'}>
                        <h3>Breaking the Records</h3>
                        <span>
                            Maria plays college basketball and wants to go pro.
                            Each season she maintains a record of her play.
                            She tabulates the number of times she breaks her season record for most points and least points in a game.
                            Points scored in the first game establish her record for the season,
                            and she begins counting from there.
                        </span>
                        <br/><br/>
                        <h4>
                            Input Format
                        </h4>
                        <span>
                            The first line contains an integer <b>n</b>, the number of games.
                            <br/>
                            The second line contains <b>n</b> space-separated integers describing the respective values of <b>score[0],score[1],...,score[n-1]</b>.
                        </span>
                        <br/><br/>
                        <h4>
                            Constraints
                        </h4>
                        <span>
                            <ul>
                                <li>
                                    <b>{'1 <= n <= 1000'}</b>
                                </li>
                                <li>
                                    <b>{'0 <= score[i] <= 10^18'}</b>
                                </li>
                            </ul>
                        </span>
                        <br/>
                        <h4>
                            Output Format
                        </h4>
                        <span>
                            Print two space-separated integers describing the respective numbers of times
                            her best (highest) score increased and her worst (lowest) score decreased.
                        </span>
                        <br/><br/>
                        <h4>
                            Sample Input #1
                        </h4>
                        <div className={'border border-dark rounded pt-2 pl-3 pb-2'} style={{width: this.state.width,backgroundColor:'#c1c1c1'}}>
                            9 <br/>
                            10 5 20 20 4 5 2 25 1
                        </div>
                        <br/><br/>
                        <h4>
                            Sample Output #1
                        </h4>
                        <div className={'border border-dark rounded pt-2 pl-3 pb-2'} style={{width: this.state.width,backgroundColor:'#c1c1c1'}}>
                            2 4
                        </div>
                    </div>
                    <div className={'border mb-5'}> </div>
                    <div className={'rounded-top border-bottom-0'} style={{width:this.state.width,minHeight: '30px',backgroundColor: '#c1c1c1'}}>
                        <div className={'ml-2 col-form-label row'}>
                            <Button
                                color={'white'}
                                className={'ml-auto mr-2'}
                                onMouseDown = {(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        value: ''
                                    })
                                }}
                                title={'Reset Code'}
                            >
                                <MdRestore size = '23px'/>
                            </Button>
                            <UncontrolledDropdown className={'mr-2'}>
                                <DropdownToggle
                                    caret={true}
                                    className={'bg-white text-dark'}
                                >
                                    Theme
                                </DropdownToggle>
                                <DropdownMenu style={{fontStyle:'normal'}}>
                                    <DropdownItem
                                        active={'github' === this.state.theme}
                                        onMouseDown={(event) => {
                                            event.preventDefault();
                                            this.setState({
                                                theme: 'github'
                                            })
                                        }}
                                    >
                                        Github
                                    </DropdownItem>
                                    <DropdownItem
                                        active={'twilight' === this.state.theme}
                                        onMouseDown={(event) => {
                                            event.preventDefault();
                                            this.setState({
                                                theme: 'twilight'
                                            })
                                        }}
                                    >
                                        Twilight
                                    </DropdownItem>
                                    <DropdownItem
                                        active={'terminal' === this.state.theme}
                                        onMouseDown={(event) => {
                                            event.preventDefault();
                                            this.setState({
                                                theme: 'terminal'
                                            })
                                        }}
                                    >
                                        Terminal
                                    </DropdownItem>
                                    <DropdownItem
                                        active={'xcode' === this.state.theme}
                                        onMouseDown={(event) => {
                                            event.preventDefault();
                                            this.setState({
                                                theme: 'xcode'
                                            })
                                        }}
                                    >
                                        Xcode
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <Input
                                type={'select'}
                                name={'select'}
                                id={'language'}
                                className={'border-dark mr-4'}
                                style={{width: '20%'}}
                                title={'Select Language'}
                                onChange = {(event) => {
                                    const val = event.target.value;
                                    this.setState({
                                        language: val,
                                        mode: this.mode_map[val]
                                    })
                                }}
                                >
                                <option value={'c'}>C</option>
                                <option value={'cpp'}>C++</option>
                                <option value={'java'}>Java</option>
                                <option value={'python2.7'}>Python 2.7</option>
                                <option value={'python3.0'}>Python 3.0</option>
                                <option value={'kotlin'}>Kotlin</option>
                            </Input>
                        </div>
                    </div>
                    <AceEditor
                        mode={this.state.mode}
                        theme={this.state.theme}
                        onChange={this.onChange}
                        name="code_editor"
                        value={this.state.value}
                        editorProps={{ $blockScrolling: true }}
                        height={this.state.height}
                        width={this.state.width}
                        showPrintMargin={false}
                        fontSize={this.state.fontSize}
                        focus={true}
                    />
                </div>
                <Button
                    className={'my-3 float-right'}
                    style={{marginRight: '17.5%'}}
                    color={'dark'}
                >
                    Submit
                </Button>
            </div>
        );
    }
}
