import { Challenge } from 'src/app/shared/interfaces/challenge';
import { ChallengeContainer } from 'src/app/shared/interfaces/challenge-container';
import { POI } from '../../poi';
import { Landmarks } from '../landmarks';
import { Motorboats } from '../motorboats';

export const NewWorld: ChallengeContainer = {
  id: 0,
  title: 'New World',
  isCollapsed: true,
  isChecked: false,
  isActive: true,
  challenges: [
    {
      id: 1000,
      description: 'Discover 10 Named Locations',
      locations: POI,
      icon: {
        image: '../../../assets/icons/102.png',
        size: [40, 40],
        anchor: [20, 40]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 1001,
      description: '3 Eliminations at Lazy Lake or Misty Meadows',
      locations: [
        {
          name: 'Lazy Lake Eliminations',
          location: [9503, 21152]
        },
        {
          name: 'Misty Meadows Eliminations',
          location: [5103, 18000]
        }
      ],
      icon: {
        image: '../../../assets/icons/18.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 1002,
      description: 'Discover 10 Landmarks',
      locations: Landmarks,
      icon: {
        image: '../../../assets/icons/141.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 1003,
      description: 'Ride a motorboat in 3 different matches',
      locations: Motorboats,
      icon: {
        image: '../../../assets/icons/Motorboat.png',
        size: [60, 60],
        anchor: [30, 30]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 1004,
      description: 'Deal 500 damage with Assault Rifles to opponents',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 1005,
      description: 'Search 7 chests at Sweaty Sands or Retail Row',
      locations: [
        {
          name: 'Search 7 chests at Sweaty Sands or Retail Row',
          location: [0, 0]
        }
      ],
      icon: {
        image: '../../../assets/icons/2.png',
        size: [40, 40],
        anchor: [20, 20]
      },
      isChecked: false,
      isActive: true
    },
    {
      id: 1006,
      description: 'Catch a weapon using a fishing rod',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 1007,
      description: 'Deal damage with SMGs, Shotguns, and Pistols in a single match 3 times',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 1008,
      description: 'Carry a knocked player 10 meters',
      locations: null,
      icon: null,
      isChecked: false,
      isActive: true
    },
    {
      id: 1009,
      description: `Search hidden 'F' found in the New World Loading Screen`,
      locations: [
        {
          name: `Search hidden 'F' found in the New World Loading Screen`,
          location: [9804, 22398]
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
