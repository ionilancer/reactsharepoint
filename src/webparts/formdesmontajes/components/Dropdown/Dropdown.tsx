import * as React from 'react';
import styles from '../Formdesmontajes.module.scss';
import { DropdownProps } from './DropdownProps';
import * as jquery from 'jquery';  
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IWebPartContext,  
} from '@microsoft/sp-webpart-base';

export default class Checkbox extends React.Component<DropdownProps,DropdownProps> {
  validarCampo(){
  }
  public constructor(props: DropdownProps,state:DropdownProps){  
    super(props);  
    this.state = {  
        name:this.props.name,
        disabled: this.props.disabled,
        internalName: this.props.internalName,
        opciones:this.props.opciones,
        lista: this.props.lista
    };  
    this.validarCampo = this.validarCampo.bind(this);
  }  
  componentWillMount(){
    var reactHandler = this;  
    jquery.ajax({  
        url:   `https://dev365x546883.sharepoint.com/sites/desmontajes/_api/web/lists/getbytitle('`+this.props.lista+`')/items?$select=Title,Id,Created,Author/Title&$expand=Author`,  
        type: "GET",  
        headers:{'Accept': 'application/json; odata=verbose;'},  
        success: function(resultData) {  
          console.log(resultData.d.results)
          resultData.d.results;  
          reactHandler.setState({  
            opciones: resultData.d.results  
          });  
        },  
        error : function(jqXHR, textStatus, errorThrown) {  
          console.log(jqXHR,textStatus,errorThrown);
        }  
    });  
  }
  public render(): React.ReactElement<DropdownProps> {
    if(this.state.opciones !=null){
    return (
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>{this.props.name}</label>
        <div>
          <select className={styles.formControl}>
        { 
         this.props.opciones.opciones.map(function(item,ikey){  
         return (
          <option value={item.Title} key={ikey}>{item.Title}</option>
            );
        })
 
      }
          </select>
          </div>
        </div>
    );
  }else{return null;} 
   }

}