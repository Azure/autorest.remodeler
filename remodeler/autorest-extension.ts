/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AutoRestExtension, } from '@azure-tools/autorest-extension-base';
import { createInlinedPropertiesPlugin } from './plugin-create-inline-properties';
import { processRequest as remodelerProcessRequest } from './plugin-remodeler';
import { tweakModelPlugin } from './plugin-tweak-model';
import { tweakModelAzurePlugin } from './plugin-tweak-model-azure';

export async function initializePlugins(pluginHost: AutoRestExtension) {
  // add remodeler plugin
  pluginHost.Add('remodeler', remodelerProcessRequest);
  pluginHost.Add('tweakcodemodel', tweakModelPlugin);
  pluginHost.Add('tweakcodemodelazure', tweakModelAzurePlugin);
  pluginHost.Add('create-virtual-properties', createInlinedPropertiesPlugin);
}
