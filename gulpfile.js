const elixir = require('laravel-elixir');

elixir((mix) => {
    mix.styles([
      './node_modules/bulma/css/bulma.css',
      './node_modules/font-awesome/css/font-awesome.css'
    ], 'src/assets/css/app.css');

    mix.copy('node_modules/font-awesome/fonts', 'src/assets/fonts');
});
