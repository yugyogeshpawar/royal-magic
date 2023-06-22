// assets
import { IconKey, IconList, IconStack } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconList,
  IconStack
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const stacking = {
  id: 'stacking',
  title: 'Stacking',
  type: 'group',
  children: [
    {
      id: 'stackinglist',
      title: 'Staking',
      type: 'item',
      url: '/stacking',
      icon: icons.IconStack,
      breadcrumbs: false
    },
    {
      id: 'stacking-summary',
      title: 'Staking Summary',
      type: 'item',
      url: '/stacking-summary',
      icon: icons.IconList,
      breadcrumbs: false
    }
  ]
};

export default stacking;
