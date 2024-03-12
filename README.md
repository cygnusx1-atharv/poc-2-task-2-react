# POC-2 Task-2

## AIM
Create a font family out of svgs in SB using task runner like webpack/gulp (integrate to CI/CD)

## How to run the Program?
- Clone this repository via the command `git clone https://github.com/cygnusx1-atharv/poc-2-task-2-react.git`
- Go to the directory using `cd poc-2-task-2-react`
- Open the terminal window (Powershell or Command Terminal) and write `npm i` to install all dependencies
- Then write, `npm run iconfont` to generate the fonts from the svgs
- The generated fonts will be present in the **src\assets\fonts\icons** folder in the format **.ttf, .eot, .woff, .woff2**

## Nitty Gritties of the Application

### Generation of SVGs
- Using a npm package known as "Gulp" to do this
- Gulp is a open-source JavaScript toolkit used to perform lots of automation and composition
- One of the features of which is to create webfonts (or iconfonts)

## Integration to Storybook

### Intergration to CI/CD
- Using Github Actions to demonstrate the process of integration to CI/CD
- Every time any image is updated in the folder, the gulp command will be run again in the pipeline
- The resultant .css file will then be updated in the repository

## Other Replacements
Found some other replacements, like Icomoon, Fontello etc, but decided to go ahead with gulp because of a few reasons,
- Custom key mapping to the font icons
- Optimization using minification of svgs before composition
- Support for multiple font file outputs like, .css, .ttf, .eot, .woff, .woff2
- Direct integration in the project, unlike Icomoon, where we have to do an API call everytime