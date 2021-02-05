import * as uuid from 'uuid';
import { TrainingPlan } from '../domain/models/TrainingPlan';

const trainingPlan: TrainingPlan = {
  assignee: {
    birthdate: "01.02.1981",
    firstname: "Bas",
    id: uuid.v4(),
    images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
    lastname: "Yuksel",
    startWeight: 100
  },
  assigner: {
    id: uuid.v4(),
    image: "https://via.placeholder.com/300",
    name: "Jessica"
  },
  workoutSessionsByYear: [{
    year: 2021,
    workoutSessionsByWeek: [
      {
        week: 1,
        workoutSessions: [{
          day: 0,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Crunches",
            reps: 120,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Squats",
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Reverse Crunch",
            reps: 200,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Bicep Curls",
            reps: 500,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Leg Curls",
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }]
      },
      {
        week: 2,
        workoutSessions: [{
          day: 0,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Crunches",
            reps: 120,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Squats",
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Reverse Crunch",
            reps: 200,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Bicep Curls",
            reps: 500,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Leg Curls",
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }]
      },
      {
        week: 3,
        workoutSessions: [{
          day: 0,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Crunches",
            reps: 120,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Squats",
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Reverse Crunch",
            reps: 200,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Bicep Curls",
            reps: 500,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Leg Curls",
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }]
      },
      {
        week: 4,
        workoutSessions: [{
          day: 0,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Crunches",
            reps: 120,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Squats",
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Reverse Crunch",
            reps: 200,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Bicep Curls",
            reps: 500,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Leg Curls",
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }]
      },
      {
        week: 4,
        workoutSessions: [{
          day: 0,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Crunches",
            reps: 120,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Squats",
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Reverse Crunch",
            reps: 200,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Bicep Curls",
            reps: 500,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Leg Curls",
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }]
      },
      {
        week: 5,
        workoutSessions: [{
          day: 0,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 1,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Crunches",
            reps: 120,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Squats",
            reps: 100,
            videos: []
          }]
        }, {
          day: 2,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Reverse Crunch",
            reps: 200,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Bicep Curls",
            reps: 500,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 50,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 3,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Leg Curls",
            reps: 100,
            videos: []
          }]
        }, {
          day: 4,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Push Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 5,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }, {
          day: 6,
          exercises: [{
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 20,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Pull Ups",
            reps: 10,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }, {
            completed: false,
            description: "just do it",
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Sit Ups",
            reps: 100,
            videos: []
          }, {
            completed: false,
            description: "just do it",
            duration: 45,
            id: uuid.v4(),
            images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300"],
            name: "Planking",
            videos: []
          }]
        }]
      }
    ]
  }
  ]
};

export default trainingPlan;