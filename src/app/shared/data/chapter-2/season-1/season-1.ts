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
        icon: '../../../assets/icons/icon.png',
        isChecked: false
      },
      {
        id: 1001,
        description: 'Eliminations at Lazy Lake or Misty Meadows',
        locations: [
          {
            name: 'testing1',
            location: [10008, 6986]
          }
        ],
        icon: 'iamge',
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
        icon: 'iamge',
        isChecked: false
      }
    ]
  }
];

