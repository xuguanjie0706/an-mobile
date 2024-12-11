import { attachPropertiesToComponent } from 'an-mobile/utils/attach-properties-to-component';
import { CapsuleTab, CapsuleTabs } from './CapsuleTabs';
import './CapsuleTabs.less';

export default CapsuleTabs;
attachPropertiesToComponent(CapsuleTabs, {
  Tab: CapsuleTab,
});
