import { Challenge } from './challenge';

export interface ChallengeContainer {
  id: number;
  title: string;
  isCollapsed: boolean;
  isChecked: boolean;
  isActive: boolean;
  challenges: Challenge[];
}
