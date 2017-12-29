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
    let opcionesCheck=[{"Title":"Sí","Id":"1"},{"Title":"No","Id":"2"}];
    return (
      <div className={styles.formdesmontajes}>
        <div className={styles.contenedor}>
          <div className={styles.colDos}>
       <Txtinput name="Fecha registro" requerido={false}  tipo="number" disabled={true} internalName="fecharegistro" value={fechaYHora} />
       <Txtinput name="Usuario"   requerido={false}  tipo="number"disabled={true} internalName="usuario"  value="" />
       <Txtinput name="Departamento"  requerido={false}   tipo="number"disabled={true} internalName="departamento"  value="" />
       <Txtinput name="Fecha registro"   requerido={false} tipo="number"disabled={true} internalName="fecharegistro" value={fechaYHora} />
       <Txtinput name="Nº contrato (billing)"  requerido={false}  tipo="number" disabled={true} internalName="numcontrato"  value="" />
       <Txtinput name="Nº contrato antiguo (venta cruzada)" requerido={false}  tipo="number"disabled={false} internalName="numcontratoantiguo"  value="" />
       <Txtinput name="Fecha instalación" requerido={false}  tipo="number" disabled={true} internalName="fechainstalacion" value={fecha} />
       <Dropdown name="Desmontaje" site={this.props.site}requerido={false}  default={null} lista="Status monitoring" disabled={false} internalName="desmontaje" opciones={opcionesCheck}/>
       <Txtinput name="Status monitoring inicial"  requerido={false}  tipo="number"disabled={true} internalName="statusmonitoringinicial" value="" />
       <Txtinput name="Status billing inicial"  requerido={false}  tipo="number" disabled={true} internalName="statusbillinginicial" value="" />
       <Dropdown name="Status monitoring final" site={this.props.site} requerido={false}  default={this.props.opcion} lista="Status monitoring" disabled={false} internalName="statusmonitoringfinal" opciones={null}/>
       <Dropdown name="Status billing final"requerido={false}  site={this.props.site} default={null} lista="Status monitoring" disabled={false} internalName="statusbillingfinal" opciones={null}/>
       <Txtinput name="Fecha cambio status de billing final"  requerido={false}  tipo="number"disabled={false} internalName="fechacambiostatusbillingfinal" value={fecha} />
       <Txtinput name="Antigüedad del cliente"  requerido={false}  tipo="number"disabled={true} internalName="antiguedaddelcliente"  value="" />
       <Txtinput name="Panel" disabled={true} requerido={false}  tipo="number" internalName="panel"  value="" />
       <Dropdown name="Devolución a favor de cliente" site={this.props.site}requerido={false}  default="blanco" lista="Status monitoring" disabled={false} internalName="statusbillingfinal" opciones={null}/>
       <Dropdown name="Motivo de devolución instalación" site={this.props.site}requerido={false}  default={null}  lista="Status monitoring" disabled={false} internalName="motivodevolucioninstalacion" opciones={null}/>
       <Dropdown name="Motivo de devolución cuotas"requerido={false}  site={this.props.site} default={null}  lista="Status monitoring" disabled={false} internalName="motivodevolucióncuotas" opciones={null}/>
       <Txtinput name="Fecha límite por reclamación consumo" requerido={false}  tipo="number" disabled={true} internalName="fechalimitereclamaciónconsumo" value={fechaYHora} />
        <Dropdown name="Penalización"requerido={false}  site={this.props.site} default={null}  lista="" disabled={false} internalName="penalización" opciones={opcionesCheck}/>
        <Dropdown name="Motivo de penalización" site={this.props.site}requerido={false}  default={null}  lista="Status monitoring" disabled={false} internalName="motivopenalizacion" opciones={null}/>
        <Dropdown name="Exención de penalización" site={this.props.site} requerido={false} default={null}  lista="Status monitoring" disabled={false} internalName="exencionpenalizacion" opciones={null}/>
        <Dropdown name="Alianzas" default={null} site={this.props.site} requerido={false}  lista="Status monitoring" disabled={false} internalName="alianzas" opciones={opcionesCheck}/>
        <Dropdown name="Descuenta bolita" site={this.props.site} requerido={false}  default={null} lista="Status monitoring" disabled={false} internalName="descuentabolita" opciones={opcionesCheck}/>
        </div>
        <div className={styles.colDos}>
        <Dropdown name="CC descuento bolita" site={this.props.site} requerido={false}  default={null} lista="Status monitoring" disabled={false} internalName="ccdescuentobolita" opciones={null}/>
        <Txtinput name="Matrícula comercial"  requerido={false}  tipo="number" disabled={true} internalName="matrículacomercial"  value="" />
        <Dropdown name="Motivo baja" requerido={false} site={this.props.site} default={null}  lista="Status monitoring" disabled={false} internalName="motivobaja" opciones={null}/>
        <Txtinput name="Importe de abono"  requerido={false}  tipo="number"disabled={true} internalName="importeabono"  value="" />
        <Txtinput name="Factura a abonar"  requerido={false}  tipo="number"disabled={true} internalName="facturaabonar"  value="" />
        <Txtinput name="Importe a devolver de instalación y/o mantenimiento" requerido={false}  tipo="number" disabled={true} internalName="importedevolvernstalacionmantenimiento "  value="" />
        <Txtinput name="Importe a devolver por cuotas" requerido={false}  tipo="number" disabled={true} internalName="importedevolverporcuotas"  value="" />
        <Dropdown name="Cliente devuelve última cuota"requerido={false}  site={this.props.site} default={null}  lista="Status monitoring" disabled={false} internalName="clientedevuelveultimacuota" opciones={opcionesCheck}/>
        <Txtinput name="Importe total a devolver"  requerido={false}  tipo="number"disabled={true} internalName="importedevolvernstalacionmantenimiento "  value="" />
        <Dropdown name="Cancelación equipo financiado"site={this.props.site}requerido={false}  default={null}  lista="Status monitoring" disabled={false} internalName="cancelacionequipofinanciado" opciones={opcionesCheck}/>
        <Dropdown name="Tipo financiación"site={this.props.site}requerido={false}  default={null}  lista="Status monitoring" disabled={false} internalName="tipofinanciacion" opciones={null}/>
        <Txtinput name="Nombre cliente"  requerido={false}  tipo="number"disabled={true} internalName="nombrecliente"  value="" />
        <Txtinput name="DNI / CIF cliente"  requerido={false}  tipo="number"disabled={true} internalName="dnicif"  value="" />
        <Txtinput name="IBAN" disabled={true}  requerido={false}  tipo="number"internalName="iban"  value="" />
        <Txtinput name="BIC / SWIFT" requerido={false}  tipo="number" disabled={true} internalName="bicfwift"  value="" />
        <Txtinput name="Verificación telefónica desmontaje" requerido={false}  tipo="number" disabled={true} internalName="verificaciontelefonicadesmontaje"  value="" />
        <Txtinput name="Fecha entrada parte de servicio" requerido={false}  tipo="number" disabled={true} internalName="fechaentradaparteservicio"  value={fecha} />
        <Txtinput name="Comentarios generales" requerido={false}  tipo="number" disabled={true} internalName="comentariosgenerales"  value="" />
        <Txtinput name="Price list" requerido={false}  tipo="number" disabled={true} internalName="pricelist"  value="" />
        <Txtinput name="Subtype" requerido={false}  tipo="number" disabled={true} internalName="Subtype"  value="" />
        <Txtinput name="Sales type" requerido={false}  tipo="number" disabled={true} internalName="salestype"  value="" />
        <Txtinput name="Member" requerido={false}  tipo="number" disabled={true} internalName="member"  value="" />
        </div>
        </div>
      </div>
    );
  }
}
