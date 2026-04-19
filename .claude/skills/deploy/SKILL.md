---
name: deploy
description: Deploy the application by running tests, building and pushing.
license: Complete terms in LICENSE.txt
---

Deploy the application by running tests, building and pushing.

## Steps

1. Run the linter (no test suite is configured, so lint acts as the quality gate):
   ```
   npm run lint
   ```
   Stop and report any errors before proceeding.

2. Build the production bundle:
   ```
   npm run build
   ```
   Stop and report any build errors before proceeding.

3. Push to staging:
   ```
   npm run preview
   ```
   Report the staging URL to the user once the server is running.
