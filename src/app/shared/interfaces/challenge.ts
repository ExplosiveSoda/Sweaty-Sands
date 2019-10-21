import { LatLngExpression } from 'leaflet';
import { ChallengeLocation } from './challenge-location';
import { Icon } from './icon';

export interface Challenge {
  id: number;
  description: string;
  locations: ChallengeLocation[];
  icon: Icon;
  isChecked: boolean;
  isActive: boolean;
}
