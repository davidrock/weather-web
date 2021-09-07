import { Hit } from './hit.model';

export interface Pixabay {
    total: number;
    totalHits: number;
    hits: Hit[];
}
