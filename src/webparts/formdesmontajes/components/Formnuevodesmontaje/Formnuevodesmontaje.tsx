import * as React from 'react';
import styles from '../Formdesmontajes.module.scss';
import { TxtinputProps } from '../inputTxt/TxtinputProps';
import { escape } from '@microsoft/sp-lodash-subset';
import  Txtinput  from '../inputTxt/Txtinput';
import {FormnuevodesmontajeProps} from "./FormnuevodesmontajeProps" 
import Checkbox from "../Checkbox/Checkbox"
import Dropdown from "../Dropdown/Dropdown"

export default class Formnuevodesmontaje extends React.Component<FormnuevodesmontajeProps,FormnuevodesmontajeProps> {
  public constructor(props:FormnuevodesmontajeProps){  
    super(props);  
  }  
  public render(): React.ReactElement<FormnuevodesmontajeProps> {
    let date = (new Date().toISOString().replace('T', ' ').replace(/\..*$/, '')).replace(/-/g,'/');;
    let date2=new Date().toJSON().slice(0,10).replace(/-/g,'/');
  //Opciones del campo Status monitoring final
    let ebi={
      opciones:["BAJA","NI","XPRU"]
    }; 

    return (
      <div className={ styles.formdesmontajes }>
       <div className={ styles.colizq }>
       <Txtinput name="Fecha registro" disabled={true} internalName="fecharegistro" value={date} />
       <Txtinput name="Usuario" disabled={false} internalName="usuario"  value="" />
       <Txtinput name="Nº instalación (monitoring)" disabled={false} internalName="numinstalacion"  value="" />
       <Txtinput name="Nº contrato (billing)" disabled={false} internalName="numcontrato"  value="" />
       <Txtinput name="Fecha instalación" disabled={true} internalName="fechainstalacion" value={date2} />
       <Checkbox name="Desmontaje" disabled={false} internalName="Desmontaje" />
       <Txtinput name="Status monitoring inicial" disabled={true} internalName="statusmonitoringinicial" value="" />
       <Txtinput name="Status billing inicial" disabled={true} internalName="statusbillinginicial" value="" />
       <Dropdown name="Status billing inicial" disabled={false} internalName="statusbillinginicial" opciones={ebi}/>
        </div><div className={ styles.colder }></div>
      </div>
    );
  }
}
