import * as React from 'react';
import styles from '../Formdesmontajes.module.scss';
import { DropdownProps } from './DropdownProps';

export default class Checkbox extends React.Component<DropdownProps,DropdownProps> {
  validarCampo(){
  }
  public constructor(props: DropdownProps,state:DropdownProps){  
    super(props);  
    this.state = {  
        name:this.props.name,
        disabled: this.props.disabled,
        internalName: this.props.internalName,
        opciones:this.props.opciones
    };  
    this.validarCampo = this.validarCampo.bind(this);
  }  
  componentDidMount(){
     
  }
  public render(): React.ReactElement<DropdownProps> {

    return (
      <span className={ styles.txtInput }>
      <label>{this.props.name}</label>
        <select>
        { 
         this.props.opciones.opciones.map((anObjectMapped, index) => {
         return (
          <option value={anObjectMapped} key={index}>{anObjectMapped}</option>
            );
        })
 
      }
        </select>
      </span>
    );
  }
}