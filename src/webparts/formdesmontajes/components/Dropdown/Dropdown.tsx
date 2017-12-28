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
        url:   `https://dev365x546883.sharepoint.com/sites/desmontajes/_api/web/lists/getbytitle('`+this.props.lista+`')/items?$select=Title,Id,Created,URL,Author/Title&$expand=Author`,  
        type: "GET",  
        headers:{'Accept': 'application/json; odata=verbose;'},  
        success: function(resultData) {  
          console.log(resultData.d.results)
          /*resultData.d.results;  
          reactHandler.setState({  
            items: resultData.d.results  
          });  */
        },  
        error : function(jqXHR, textStatus, errorThrown) {  
          console.log(jqXHR,textStatus,errorThrown);
        }  
    });  
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