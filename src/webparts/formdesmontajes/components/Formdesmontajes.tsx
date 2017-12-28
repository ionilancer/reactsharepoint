import * as React from 'react';
import styles from './Formdesmontajes.module.scss';
import { TxtinputProps } from './inputTxt/TxtinputProps';
import { escape } from '@microsoft/sp-lodash-subset';
import  Txtinput  from './inputTxt/Txtinput';
import Formnuevodesmontajes from "./Formnuevodesmontaje/Formnuevodesmontaje"
import {FormdesmontajesProps} from "./FormdesmontajesProps" 


export default class Formdesmontajes extends React.Component<FormdesmontajesProps, FormdesmontajesProps> {
  public constructor(props:FormdesmontajesProps,state:FormdesmontajesProps){  
    super(props); 
     
    this.state = {  
        modo:"nuevo"
    };  
  }  
  public render(): React.ReactElement<FormdesmontajesProps> {
    if(this.state.modo=="nuevo"){
      return(
       <Formnuevodesmontajes opcion="URL" />
      );
    }
  }
}