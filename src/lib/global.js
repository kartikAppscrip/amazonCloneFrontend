import { handleLoader } from './rxSubject.js';

// add loader
export const start_loader = () => handleLoader.next(true);
export const stop_loader = () => handleLoader.next(false);