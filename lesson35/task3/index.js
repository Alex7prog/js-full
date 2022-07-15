// List of user Github repositories

import { initHandlers } from './src/scripts/handlers.js';
import { initDefaultUser } from './src/scripts/defaultUser.js';

// Algo:
// 1. Init default page
// 2. Handle input user and click button Show
// 3. Show spinner
// 4. Request user data from github
// 5. Hidden spinner
// 6. Render user Data on page
// 7. Request user repo from github
// 8. Render user repo on page
// 9. if error alert with message & Hidden spinner

initDefaultUser();
initHandlers();
