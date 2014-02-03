gdgil-site
==========

gdg.co.il website

## Setup instructions

1. Install node.js (version 0.10.0 or newer), npm, ruby (version 1.9.2 or newer), git command-line client (version 1.8.4 or newer)
2. Run the following commands (as super-user):
   * `npm install -g bower grunt_cli`
   * `gem install compass`
3. Clone the project and run the following commands in the project directory:
   * `npm install`
   * `bower install`
   
## Development instructions

Run the development server using the following command:

`grunt serve`

## Testing your build

Run `grunt serve:dist` to build a minified version of the website and test it. Then, when it completes the build, open `http://localhost:9000` in your web browser to see the result of the build.

## Automatic Deployment 

In order to deploy your changes, make sure git is configured correctly with your ssh keys and run the following command:

`grunt build deploy`

## Troubeshooting

If the build / automatic deployment failed, please make sure that there are no other instances of grunt running and try again.
