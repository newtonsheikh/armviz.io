import React, { SFC } from 'react';
import { ToolboxItemPayload } from 'stores/toolboxStore';

export const ToolboxItem: SFC<ToolboxItemPayload> = ({ text }) => <div>{text}</div>;
