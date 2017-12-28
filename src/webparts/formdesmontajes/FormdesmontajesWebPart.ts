import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IWebPartContext,  
} from '@microsoft/sp-webpart-base';

import * as strings from 'FormdesmontajesWebPartStrings';
import Formdesmontajes from './components/Formdesmontajes';
import {FormdesmontajesProps} from "./components/FormdesmontajesProps"

export default class FormdesmontajesWebPart extends BaseClientSideWebPart<{}> {

  public render(): void {

    const element: React.ReactElement<FormdesmontajesProps > = React.createElement(Formdesmontajes);
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
