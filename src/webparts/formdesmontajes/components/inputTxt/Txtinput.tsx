import * as React from 'react';
import styles from '../Formdesmontajes.module.scss';
import { TxtinputProps } from './TxtinputProps';
export default class Txtinput extends React.Component<TxtinputProps,TxtinputProps> {
  validarCampo(){

  }
  handleBlur() {
    let object = this.refs.input;
    console.log(object)
  }
  handleChange(e) {
    let object = this.refs.input;
    this.setState({ value: e.target.value });
  }
  public constructor(props: TxtinputProps,state:TxtinputProps){  
    super(props);  
    this.state = {  
        name:this.props.name,
        disabled: this.props.disabled,
        internalName: this.props.internalName,
        value:this.props.value
    };  
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validarCampo = this.validarCampo.bind(this);
  }  
  componentDidMount(){
    let object = this.refs.input;
  }
  public render(): React.ReactElement<TxtinputProps> {
    return (
        <span className={ styles.txtInput }>
          <label>{this.props.name}</label>
          <input 
            type ="text"
            name={(this.props.name.split(' ').join('')).replace(/[^a-zA-Z ]/g, "")}
            ref="input"
            onBlur={this.handleBlur}
            onChange ={this.handleChange}
            value={this.state.value}
            disabled={this.props.disabled}/>
        </span>
    );
  }
}