import * as React from 'react';
import styles from '../Formdesmontajes.module.scss';
import { TxtinputProps } from './TxtinputProps';
export default class Txtinput extends React.Component<TxtinputProps,TxtinputProps> {
  validarCampo(){

  }
  handleBlur() {
    let object = this.refs.input;
  }
  handleChange(e) {
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
      <div className={ styles.formGroup }>
          <label className={ styles.formLabel }>{this.props.name}</label>
          <div>
          <input 
                className={ styles.formControl }
            type ="text"
            name={this.props.internalName}
            ref="input"
            onBlur={this.handleBlur}
            onChange ={this.handleChange}
            value={this.state.value}
            disabled={this.props.disabled}/>
          </div>
        </div>
    );
  }
}