export class Exercise {
  id: string;
  name: ExerciseName;
  description: string;
  images: string[]; // img urls
  videos: string[]; // stream urls
}



export class ExerciseName {
  public static pushUp = 'Push Up';
  public static sitUp = 'Sit Up';
  public static crunch = 'Crunch';
  public static reverseCrunch = 'Reverse Crunch';
  public static lunge = 'Lunge';
  public static squat = 'Squat';
  public static bicepCurl = 'BicepCurl';
  public static plank = 'Plank';
  public static pullUp = 'Pull Up';
  public static legCurls = 'Leg Curls';
}