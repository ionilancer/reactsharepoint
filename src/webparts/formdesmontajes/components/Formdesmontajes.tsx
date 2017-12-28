import * as React from 'react';
import styles from './Formdesmontajes.module.scss';
import { TxtinputProps } from './inputTxt/TxtinputProps';
import { escape } from '@microsoft/sp-lodash-subset';
import  Txtinput  from './inputTxt/Txtinput';
import Formnuevodesmontajes from "./Formnuevodesmontaje/Formnuevodesmontaje";
import {FormdesmontajesProps} from "./FormdesmontajesProps";
export default class Formdesmontajes extends React.Component<FormdesmontajesProps, FormdesmontajesProps> {
  public constructor(props:FormdesmontajesProps,state:FormdesmontajesProps){  
    super(props); 
     this.state = {  
        modo:"nuevo"
     };  
  }  
  public render(): React.ReactElement<FormdesmontajesProps> {
    if(this.state.modo=="nuevo"){
      let url_string = window.location.href;
      let url = new URL(url_string);
      let opcion = url.searchParams.get("opcion");
      opcion = opcion != null ? opcion : "XPRU";// Si no se pasa ningun parametro por la URL por defecto XPRU
      return(
       <Formnuevodesmontajes 
       site={window.location.href.substr(0,window.location.href.indexOf("com")+3)}
       opcion={opcion} />
      );
    }
  }
}