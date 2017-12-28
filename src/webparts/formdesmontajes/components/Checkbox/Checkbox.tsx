import * as React from 'react';
import styles from '../Formdesmontajes.module.scss';
import { CheckboxProps } from './CheckboxProps';
export default class Checkbox extends React.Component<CheckboxProps,CheckboxProps> {
  validarCampo(){

  }

  public constructor(props: CheckboxProps,state:CheckboxProps){  
    super(props);  
    this.state = {  
        name:this.props.name,
        disabled: this.props.disabled,
        internalName: this.props.internalName,

    };  

    this.validarCampo = this.validarCampo.bind(this);
  }  
  componentDidMount(){
    let object = this.refs.input;   
  }
  public render(): React.ReactElement<CheckboxProps> {
 
    return (
        <span >
          <label>{this.props.name}</label>
          <input 
            type ="checkbox"
            name={(this.props.name.split(' ').join('')).replace(/[^a-zA-Z ]/g, "")}
            ref="input"  
            disabled={this.props.disabled}/>
        </span>
    );
  }
}