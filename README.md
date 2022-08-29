# webpack-config
> Webpack is used to compile JavaScript modules. Once installed, you can interact with webpack either from its CLI or API. 

# Getting Started with WebPack

### Step - 1

#### Basic Setup
-  First initialize npm, install webpack locally, and install the webpack-cli (the tool used to run webpack on the command line)

```
npm install webpack webpack-cli --save-dev
```

## Step -2 
- Adjust package.json file in order to make sure we mark our package as private, as well as removing the main entry. - This is to prevent an accidental publish of code. 

## Step - 3
- Now we'll create directory with files and their contents

## Step - 4 

#### Creating a Bundle
> First we'll tweak our directory structure slightly, by creating a dist folder where we'll put the index.html
- Bundle the lodash dependency with index.js, we'll need to install the library locally.
- When installing a package that will be bundled into your production bundle, you should use npm install --save. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use npm install --save-dev

##### Import lodash
> Now, since we'll be bundling our scripts, we have to update our index.html file. Let's remove the lodash <script>, as we now import it, and modify the other <script> tag to load the bundle, instead of the raw ./src file:
 
 ```
 npm install --save lodash
 ```

## Step - 5

#### Run WebPack
>  let's run npx webpack, which will take our script at src/index.js as the entry point, and will generate dist/main.js as the output. The npx command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary (./node_modules/.bin/webpack) of the webpack package we installed in the beginning.
- Open index.html from the dist directory in your browser and, if everything went right, you should see the following text: 'Hello webpack'.

```
 npx webpack
```

## Step - 6
 #### Using a Configuration

 > As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file. This is much more efficient than having to manually type in a lot of commands in the terminal, so let's create one.
 - Run the build again but instead using our new configuration file:

 ```
 npx webpack --config webpack.config.js
 ```
 - A configuration file allows far more flexibility than CLI usage. We can specify loader rules, plugins, resolve options and many other enhancements this way.

 ## Step - 7

 #### NPM Scripts
 > Given it's not particularly fun to run a local copy of webpack from the CLI.
 - Set up a little shortcut by adding npm script on package.json file
 - Now the npm run build command can be used in place of the npx command used earlier. 
 - Note that within scripts we can reference locally installed npm packages by name the same way we did with npx. 
 - Run the command and see if your script alias works:
  
  ```
  npx run build
  ```

  # Setting up HtmlWebpackPlugin
  > All the distribution files will be placed in /dist directory. 
  > Files should not manually be created in the /dist folder, as there's a risk they will be overwritten. 
  > Therefore, install the HtmlWebpackPlugin to automatically create the index.html file in the /dist directory.

#### Instructions followed
- When creating HTMLWebpackPlugin, [setting up HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin) intructions and notes were used in setting up this project.

  ## Step - 1

  #### Install webpack.config.js file:

  ```
  npm install --save-dev html-webpack-plugin
  ```
 ## Step - 2
- Add htmlpackage plugin and include it on the webpack.config.js file
- run and build the htmlwebpack plugin using the following command

```
npm run build
```
- After running the build HtmlWebpackPlugin by default will generate its own index.html file, even though already there's one in the dist/ folder. This means that it will replace the initial index.html file with a newly generated one.

## Step - 3

#### Cleaning up the /dist folder
- General it's good practice to clean the /dist folder before each build, so that only used files will be generated. - That is done using output.clean option on the webpack.config.js file
 - Run npm run build to clean directory

 ## Step - 4
 #### Modify webpack.config.js
 - Modify webpack.config.js to point HtmlWebpackPlugin towards your template created

# Loading CSS
> In order to import a CSS file from within a JavaScript module, install and add the style-loader and css-loader to the module configuration file.

## Step - 1
#### Setup
- Change script on the index.html and output filename on config file from main.js to bundle.js
- Then run and build

## Step - 2
- to install css loader run the following command

```
npm install --save-dev style-loader css-loader
```
- Add style loader to module config file

```
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  ```

## Using webpack-dev-server
> The webpack-dev-server provides a rudimentary web server and the ability to use live reloading. Let's set it up:

## Step - 1
Install web dev server

```
npm install --save-dev webpack-dev-server
```

## Step - 2

- Change your configuration file to tell the dev server where to look for files
- This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.

## Step - 3
> Add a script to easily run the dev server as well on the package.json file

### Run 
- Now run npm start from the command line and the browser will automatically load up the page. 
- If any of the source files is changed and saved the web server will automatically reload after the code has been compiled. 

## Acknowledgenments

- [webpack's getting Started file](https://webpack.js.org/guides/getting-started/) whose instructions were used in creating the project and their notes were used to summarise and explain all the steps taken on the readme.md file.

- [Setting up HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin) whose instructions were used in the creation of this project and notes were used to summarise each step on the readme.md file

- [Loading css](https://webpack.js.org/guides/asset-management/#loading-css) whose instructions were used in the creation of this project and notes were used to summarise each step on the readme.md file

- [Using webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server) whose instructions were used in the creation of this project and notes were used to summarise each step on the readme.md file

