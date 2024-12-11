import './Gird.less';

import  { Grid,GridItem } from './Gird';
import { attachPropertiesToComponent } from 'an-mobile/utils/attach-properties-to-component';
export type { GridProps ,GridItemProps} from './Gird';

export default attachPropertiesToComponent(Grid, {
    Item: GridItem,
})
  