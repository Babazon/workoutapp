
export class User {
  firstname: string;
  lastname: string;
  id: string;
  birthdate: string; // ISO date
  startWeight: number;
  targetWeight?: number;
  images: string[]; // image urls
}
