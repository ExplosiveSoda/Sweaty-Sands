import { ChallengeContainer } from 'src/app/shared/interfaces/challenge-container';
import { POI } from '../../poi';

export const OpenWater: ChallengeContainer = {
  id: 2,
  title: 'Open Water',
  isCollapsed: true,
  isChecked: false,
  isActive: true,
  challenges: [
    {
      id: 2000,
      description: 'Land at Craggy Cliffs, Salty Springs, and Dirty Docks',
      locations: [
        {
          name: 'Craggy Cliffs',
          location: [25868, 18092]
        },
        {
          name: 'Salty Springs',
          location: [16464, 12272]
        },
        {
          name: 'Dirty Docks',
          location: [16784, 27648]
        }
      ],
      icon: {
        image: '../../../assets/icons/102.png',
        size: [40, 40],
        anchor: [20, 40]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 2001,
      description: 'Hide inside hideouts in 3 different matches',
      locations: POI,
      icon: {
        image: '../../../assets/icons/102.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 2002,
      description: 'Search 7 chests at Craggy Cliffs or Misty Meadows',
      locations: POI,
      icon: {
        image: '../../../assets/icons/102.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 2003,
      description: 'Eliminate 2 opponents with a sniper rifle',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2004,
      description: 'Be crouched within 20 meters of an opponent for a total of 10 seconds',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2005,
      description: 'Search 7 ammo boxes in a single match',
      locations: POI,
      icon: {
        image: '../../../assets/icons/102.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 2006,
      description: 'Get an elimination from 50 meters or further',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2007,
      description: 'Survive 10 storm phases',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 2008,
      description: 'Deal 150 damage within 10 seconds of leaving a hideout',
      locations: POI,
      icon: {
        image: '../../../assets/icons/102.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 2009,
      description: `Search hidden 'O' found in the Open Water loading screen`,
      locations: [
        {
          name: `Search hidden 'O' found in the Open Water loading screen`,
          location: [26620, 18104]
        }
      ],
      icon: {
        image: '../../../assets/icons/141.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    }
  ]
};
