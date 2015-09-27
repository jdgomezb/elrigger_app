Router.configure({
  layoutTemplate: 'main'
});

Router.route('dashboard', {
  path: '/'
});

Router.route('search');

Router.route('add');

  // this.route('recipes');
  // this.route('bookmarks');
  // this.route('about');
  // this.route('recipe', {path: '/recipes/:name'});
  // this.route('admin', { layoutTemplate: null });
