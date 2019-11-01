import { POI } from '../../poi';
import { LtmChallengeContainer } from 'src/app/shared/interfaces/ltm-challenge-container';

export const Fortnitemares: LtmChallengeContainer = {
  id: 2,
  title: 'Fortnitemares',
  isCollapsed: true,
  isChecked: false,
  isActive: true,
  timeLeft: new Date(2019, 0O12, 0O4, 22).valueOf() - new Date().valueOf(),
  challenges: [
    {
      id: 2000,
      description: 'Destroy haunted household furniture (5)',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2001,
      description: 'Leap from a Hideout while an opposing player is within 20m',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2002,
      description: 'Search a chest in a haunted forest, a ghost town, and a spooky farm',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2003,
      description: 'Deal damage to Stork King weak points (10,000)',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2004,
      description: 'Revive teammates while battling the Storm King (3)',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2005,
      description: 'Defeat the Storm King',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    }
  ]
};
