import { attachPropertiesToComponent } from 'an-mobile/utils/attach-properties-to-component';
import { List } from './List';
import './List.less';
export type { ListProps,ListRef } from './List';
import { ListItem } from './ListItem';
export type { ListItemProps } from './ListItem';


export default attachPropertiesToComponent(List, { Item: ListItem });
