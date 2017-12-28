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
    this.handleChange = this.handleChange.bind(this);
  }  

  validarCampo(){
  }
  handleChange(){
    //https://github.com/JedWatson/react-select/issues/796
    /*
https://dev365x546883.sharepoint.com/sites/desmontajes 
ion.bengoetxea@DEV365x546883.onmicrosoft.com
O365S3curit@s
*/
    console.log("change")
  }

  componentWillMount(){
    if(this.props.opciones == null){
      var reactHandler = this;  
      jquery.ajax({  
          url:   `https://dev365x546883.sharepoint.com/sites/desmontajes/_api/web/lists/getbytitle('`+this.props.lista+`')/items?$select=Title,Id,Created,Author/Title&$expand=Author`,  
          type: "GET",  
          headers:{'Accept': 'application/json; odata=verbose;'},  
          success: function(resultData) {  
            reactHandler.setState({  
              opciones: resultData.d.results  
            });  
          },  
          error : function(jqXHR, textStatus, errorThrown) {  
            console.log(jqXHR,textStatus,errorThrown);
          }  
      });  
    }
  }
  componentDidMount(){
  
  }
  public render(): React.ReactElement<DropdownProps> {
    if(this.state.opciones !=null){
   // let blanco = this.props.default == "blanco" ? (<option value="blanco"></option>):null;
   let opt = this.state.opciones;
   let cont =0;
   if(this.props.default == "blanco"){
     let  optBlanco={"Title":"_","Id":cont};
    opt.unshift(optBlanco);
   
   }
    return (
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>{this.props.name}</label>
        <div>
          <select
          onChange ={this.handleChange}
        value ={this.props.default}         
          className={styles.formControl}>
        { 
         opt.map(function(item,ikey){  cont++;
         return (
          <option value={item.Title} key={cont}>{item.Title}</option>
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