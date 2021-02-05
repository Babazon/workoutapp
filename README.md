How to run

yarn to install dependencies. pod install will be run on postinstall
yarn start to start the development server
yarn ios to start the ios simulator and build the app on it

Todo:

Add Ajax class for basic get/post/put/delete operations. It should save session token to redux state, or persistence, and use it in headers for auth
Add actual login with ajax class
Make calls to backend (thunk is included in redux-toolkit) for the mock data
Add video and audio features to exercise detail screen
Add day time slots grid to workout session page, make exercises of session draggable between them with snap-to-place
Add nice styles, colors, and designs
Add persistence for videos and images for basic exercise classes
Break Workout state slice to multiple pieces
Add times for workout session start/stop
Add sound clues from the exercise when it is active
Mark exercises as active/doing