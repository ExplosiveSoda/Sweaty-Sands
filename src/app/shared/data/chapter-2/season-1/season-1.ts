import { LatLngExpression } from 'leaflet';
import { ChallengeContainer } from '../../../interfaces/challenge-container';
import { POI } from 'src/app/shared/data/poi';
import { Landmarks } from 'src/app/shared/data/chapter-2/season-1/landmarks';

export const Season1: ChallengeContainer[] = [
  {
    id: 0,
    title: 'New World',
    isCollapsed: true,
    isChecked: false,
    challenges: [
      {
        id: 1000,
        description: 'Discover 10 Named Locations',
        locations: POI,
        icon: {
          image: '../../../assets/icons/icon.png',
          size: [40, 40],
          anchor: [20, 40]
        },
        isChecked: false
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
          image: '../../../assets/icons/skull.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      },
      {
        id: 1002,
        description: 'Discover 10 Landmarks',
        locations: Landmarks,
        icon: {
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      },
      {
        id: 1003,
        description: 'Ride a motorboat in 3 different matches',
        locations: [
          {
            name: 'Ride a motorboat in 3 different matches',
            location: [0, 0]
          }
        ],
        icon: {
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      },
      {
        id: 1004,
        description: 'Deal 500 damage with Assault Rifles to opponents',
        locations: [
          {
            name: 'Deal 500 damage with Assault Rifles to opponents',
            location: [0, 0]
          }
        ],
        icon: {
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
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
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      },
      {
        id: 1006,
        description: 'Catch a weapon using a fishing rod',
        locations: [
          {
            name: 'Catch a weapon using a fishing rod',
            location: [0, 0]
          }
        ],
        icon: {
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      },
      {
        id: 1007,
        description: 'Deal damage with SMGs, Shotguns, and Pistols in a single match 3 times',
        locations: [
          {
            name: 'Deal damage with SMGs, Shotguns, and Pistols in a single match 3 times',
            location: [0, 0]
          }
        ],
        icon: {
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      },
      {
        id: 1008,
        description: 'Carry a knocked player 10 meters',
        locations: null,
        icon: null,
        isChecked: false
      },
      {
        id: 1009,
        description: `Search hidden 'F' found in the New World Loading Screen`,
        locations: [
          {
            name: `Search hidden 'F' found in the New World Loading Screen`,
            location: [0, 0]
          }
        ],
        icon: {
          image: '../../../assets/icons/landmark.png',
          size: [40, 40],
          anchor: [20, 20]
        },
        isChecked: false
      }
    ]
  }
];

