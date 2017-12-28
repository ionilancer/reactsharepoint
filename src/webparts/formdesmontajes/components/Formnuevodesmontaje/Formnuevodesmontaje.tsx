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
    let fechaYHora = (new Date().toISOString().replace('T', ' ').replace(/\..*$/, '')).replace(/-/g,'/');;
    let fecha=new Date().toJSON().slice(0,10).replace(/-/g,'/');
    //Opciones del campo Status monitoring final
    let opcionesEMF={
      opciones:["BAJA","NI","XPRU"]
    }; 
    //Status billing final
    let opcionesEBF={
      opciones:["CUNO","STBY","N/A"]
    }; 
    //Devolución a favor de cliente
    let opcionesDAC={
      opciones:["Cuotas","Instalación","Cuotas e instalación","Mantenimientos","Cuotas, instalación y mantenimientos","Cuotas y mantenimientos","Instalación y mantenimientos"]
    }; 
     //Devolución a favor de cliente?
     let opcionesMDI={
      opciones:["Cuotas","Instalación","Cuotas e instalación","Mantenimientos","Cuotas, instalación y mantenimientos","Cuotas y mantenimientos","Instalación y mantenimientos"]
    }; 
    return (
      <div className={ styles.formdesmontajes }>
       <div className={ styles.colizq }>
       <Txtinput name="Fecha registro" disabled={true} internalName="fecharegistro" value={fechaYHora} />
       <Txtinput name="Usuario" disabled={true} internalName="usuario"  value="" />
       <Txtinput name="Departamento" disabled={true} internalName="departamento"  value="" />
       <Txtinput name="Fecha registro" disabled={true} internalName="fecharegistro" value={fechaYHora} />
       <Txtinput name="Nº contrato (billing)" disabled={true} internalName="numcontrato"  value="" />
       <Txtinput name="Nº contrato antiguo (venta cruzada)" disabled={true} internalName="numcontratoantiguo"  value="" />
       <Txtinput name="Fecha instalación" disabled={true} internalName="fechainstalacion" value={fecha} />
       <Checkbox name="Desmontaje" disabled={false} internalName="desmontaje" />
       <Txtinput name="Status monitoring inicial" disabled={true} internalName="statusmonitoringinicial" value="" />
       <Txtinput name="Status billing inicial" disabled={true} internalName="statusbillinginicial" value="" />
       <Dropdown name="Status monitoring final" lista="Status monitoring" disabled={false} internalName="statusmonitoringfinal" opciones={{}}/>
       <Dropdown name="Status billing final" lista="Status monitoring" disabled={false} internalName="statusbillingfinal" opciones={opcionesEMF}/>
       <Txtinput name="Fecha cambio status de billing final" disabled={false} internalName="fechacambiostatusbillingfinal" value={fecha} />
       <Txtinput name="Antigüedad del cliente" disabled={true} internalName="antiguedaddelcliente"  value="" />
       <Txtinput name="Panel" disabled={true} internalName="panel"  value="" />
       <Dropdown name="Devolución a favor de cliente" lista="Status monitoring" disabled={false} internalName="statusbillingfinal" opciones={opcionesDAC}/>
       <Dropdown name="Motivo de devolución instalación" lista="Status monitoring" disabled={false} internalName="motivodevolucioninstalacion" opciones={opcionesMDI}/>
       <Dropdown name="Motivo de devolución cuotas" lista="Status monitoring" disabled={false} internalName="motivodevolucióncuotas" opciones={opcionesMDI}/>
       <Txtinput name="Fecha límite por reclamación consumo" disabled={true} internalName="fechalimitereclamaciónconsumo" value={fechaYHora} />
        </div><div className={ styles.colder }>
        <Checkbox name="Penalización" disabled={false} internalName="penalización" />
        <Txtinput name="Importe penalización" disabled={true} internalName="importepenalizacion"  value="" />
        <Dropdown name="Motivo de penalización" lista="Status monitoring" disabled={false} internalName="motivopenalizacion" opciones={opcionesMDI}/>
        <Dropdown name="Exención de penalización" lista="Status monitoring" disabled={false} internalName="exencionpenalizacion" opciones={opcionesMDI}/>
        <Checkbox name="Alianzas" disabled={false} internalName="alianzas" />
        <Checkbox name="Descuenta bolita" disabled={false} internalName="descuentabolita" />
        <Dropdown name="CC descuento bolita" lista="Status monitoring" disabled={false} internalName="ccdescuentobolita" opciones={opcionesMDI}/>
        <Txtinput name="Matrícula comercial" disabled={true} internalName="matrículacomercial"  value="" />
        <Dropdown name="Motivo baja" lista="Status monitoring" disabled={false} internalName="motivobaja" opciones={opcionesMDI}/>
        <Txtinput name="Importe de abono" disabled={true} internalName="importeabono"  value="" />
        <Txtinput name="Factura a abonar" disabled={true} internalName="facturaabonar"  value="" />
        <Txtinput name="Importe a devolver de instalación y/o mantenimiento" disabled={true} internalName="importedevolvernstalacionmantenimiento "  value="" />
        <Txtinput name="Importe a devolver por cuotas" disabled={true} internalName="importedevolverporcuotas"  value="" />
        <Checkbox name="Cliente devuelve última cuota" disabled={false} internalName="clientedevuelveultimacuota" />
        <Txtinput name="Importe total a devolver" disabled={true} internalName="importedevolvernstalacionmantenimiento "  value="" />
        <Checkbox name="Cancelación equipo financiado" disabled={false} internalName="cancelacionequipofinanciado" />
        <Dropdown name="Tipo financiación" lista="Status monitoring" disabled={false} internalName="tipofinanciacion" opciones={opcionesMDI}/>
        <Txtinput name="Nombre cliente" disabled={true} internalName="nombrecliente"  value="" />
        <Txtinput name="DNI / CIF cliente" disabled={true} internalName="dnicif"  value="" />
        <Txtinput name="IBAN" disabled={true} internalName="iban"  value="" />
        <Txtinput name="BIC / SWIFT" disabled={true} internalName="bicfwift"  value="" />
        <Txtinput name="Verificación telefónica desmontaje" disabled={true} internalName="verificaciontelefonicadesmontaje"  value="" />
        <Txtinput name="Fecha entrada parte de servicio" disabled={true} internalName="fechaentradaparteservicio"  value={fecha} />
        <Txtinput name="Comentarios generales" disabled={true} internalName="comentariosgenerales"  value="" />
        <Txtinput name="Price list" disabled={true} internalName="pricelist"  value="" />
        <Txtinput name="Subtype" disabled={true} internalName="Subtype"  value="" />
        <Txtinput name="Sales type" disabled={true} internalName="salestype"  value="" />
        <Txtinput name="Member" disabled={true} internalName="member"  value="" />
        </div>
      </div>
    );
  }
}
