
import HomePage from '../pages/home.svelte';
import CatalogPage from '../pages/catalog.svelte';
import articolo from '../pages/articolo.svelte';
import articolo2 from '../pages/articolo2.svelte';
import articolo3 from '../pages/articolo3.svelte';
import articolo4 from '../pages/articolo4.svelte';

import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },

  
  {
    path: '/articolo/',
    component: articolo,
  },
  {
    path: '/articolo2/',
    component: articolo2,
  },
  {
    path: '/articolo3/',
    component: articolo3,
  },
  {
    path: '/articolo4/',
    component: articolo4,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Italiano',
          lastName: '& Storia',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
