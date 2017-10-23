# recreate-nested-route-hook-issue

My scenario: I have a `/user` service registered at the root of the feathers application. I would like to create a nested route off of the `/user` route to handle various account management related functionality - i.e. `/user/reset/?some=params`. (This example is for an unauthenticated user reset, so something like `/user/:user_id/reset` would not be applicable)

On the find() method calls for /user/reset service, the hooks for the /user service are running instead of the hooks for the /user/reset service. I *think* this is because the route for `/user/reset/?some=params` is matching on the `/user/{id}` route, but I'm not sure what the workaround should be. 

To recreate, do an `npm run test` and view the output. The `debug` hook output for the /user/reset service shows that the /user service hooks were actually run. 

