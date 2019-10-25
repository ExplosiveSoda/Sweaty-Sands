import { ChallengeContainer } from '../../../interfaces/challenge-container';
import { Workbench } from 'src/app/shared/data/chapter-2/season-1/workbench';
import { Motorboats } from 'src/app/shared/data/chapter-2/season-1/motorboats';

export const Other: ChallengeContainer[] = [
  {
    id: 0,
    title: 'Spawns',
    isCollapsed: true,
    isChecked: false,
    isActive: true,
    challenges: [
      {
        id: 1000,
        description: 'Chests',
        locations: null,
        icon: {
          image: '../../../assets/icons/102.png',
          size: [40, 40],
          anchor: [20, 40]
        },
        isChecked: false,
        isActive: false
      },
      {
        id: 1001,
        description: 'Vending Machines',
        locations: null,
        icon: {
          image: '../../../assets/icons/102.png',
          size: [40, 40],
          anchor: [20, 40]
        },
        isChecked: false,
        isActive: false
      },
      {
        id: 1002,
        description: 'Motorboats',
        locations: Motorboats,
        icon: {
          image: '../../../assets/icons/Motorboat2.png',
          size: [60, 60],
          anchor: [30, 30]
        },
        isChecked: false,
        isActive: true
      },
      {
        id: 1003,
        description: 'Weapon Upgrade Benches',
        locations: Workbench,
        icon: {
          image: '../../../assets/icons/upgrademachine3.png',
          size: [60, 60],
          anchor: [30, 30]
        },
        isChecked: false,
        isActive: true
      },
      {
        id: 1004,
        description: 'Hiding Spots',
        locations: null,
        icon: {
          image: '../../../assets/icons/102.png',
          size: [40, 40],
          anchor: [20, 40]
        },
        isChecked: false,
        isActive: false
      },
      {
        id: 1005,
        description: 'Fishing Rods',
        locations: null,
        icon: {
          image: '../../../assets/icons/102.png',
          size: [40, 40],
          anchor: [20, 40]
        },
        isChecked: false,
        isActive: false
      }
    ]
  }
];
