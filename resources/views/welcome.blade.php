<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 5.3 - Angular 2</title>

        {{ Html::script('vendor/core-js/client/shim.min.js') }}
        {{ Html::script('vendor/zone.js/dist/zone.js') }}
        {{ Html::script('vendor/reflect-metadata/Reflect.js') }}
        {{ Html::script('vendor/systemjs/dist/system.src.js') }}
        {{ Html::script('systemjs.config.js') }}

        <script>
            System.import('app').catch(function(err){ console.error(err); });
        </script>
    </head>
    <body>
        <my-app>Loading...</my-app>
    </body>
</html>