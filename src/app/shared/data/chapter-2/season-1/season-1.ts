import { LatLngExpression } from 'leaflet';
import { ChallengeContainer } from '../../../interfaces/challenge-container';
import { POI } from 'src/app/shared/data/poi';

export const Season1: ChallengeContainer[] = [
  {
    id: 0,
    title: 'New World',
    isCollapsed: true,
    isChecked: false,
    challenges: [
      {
        id: 1000,
        description: 'Discover Named Locations',
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
        description: 'Eliminations at Lazy Lake or Misty Meadows',
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
        description: 'Discover Landmarks',
        locations: [
          {
            name: 'testing2',
            location: [5000, 6986]
          }
        ],
        icon: {
          image: '../../../assets/icons/icon.png',
          size: [40, 40],
          anchor: [20, 40]
        },
        isChecked: false
      }
    ]
  }
];

