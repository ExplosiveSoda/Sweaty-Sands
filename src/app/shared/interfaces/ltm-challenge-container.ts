import { Challenge } from './challenge';

export interface LtmChallengeContainer {
  id: number;
  title: string;
  isCollapsed: boolean;
  isChecked: boolean;
  isActive: boolean;
  timeLeft: number;
  challenges: Challenge[];
}
