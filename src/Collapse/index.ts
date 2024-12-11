import { attachPropertiesToComponent } from 'an-mobile/utils/attach-properties-to-component';
import { Collapse, CollapsePanel } from './Collapse';
import './Collapse.less';
export type { CollapsePanelProps, CollapseProps } from './Collapse';

export default attachPropertiesToComponent(Collapse, { Panel: CollapsePanel });
