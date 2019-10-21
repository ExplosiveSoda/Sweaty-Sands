import { LatLngExpression } from 'leaflet';
import { ChallengeContainer } from '../../../interfaces/challenge-container';
import { POI } from 'src/app/shared/data/chapter-2/poi';
import { Landmarks } from 'src/app/shared/data/chapter-2/season-1/landmarks';
import { Motorboats } from 'src/app/shared/data/chapter-2/season-1/motorboats';
import { NewWorld } from './week-1/new-world';
import { OpenWater } from './week-2/open-water';

export const Season1: ChallengeContainer[] = [
  NewWorld,
  OpenWater
];

