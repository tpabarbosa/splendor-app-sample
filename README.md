# Splendor App Sample

### APP Concept Layout - Framework7

![tela3](/docs/image3.jpeg?raw=true)

Aplicativo criado como parte do processo seletivo *Full Stack Developer Splendor.io*.


* Descrição: Construção de 3 telas de interface de app em Framework7 Core (framework7.io).

* Objetivo: Avaliar seu conhecimento em javascript e sua capacidade de compreender documentação de apis, templates handlebars e organização do código no Framework7.

* Observação Importante:
Para a tela de Login utilize o endpoint abaixo com as seguintes credenciais para validação.

Endpoint: https://splendor.dev/wp-json/wp/v2/dev/user/auth
método: POST
método de autenticação: BASIC

>
> Durante o desenvolvimento do app, esbarrei em um problema de CORS em relação a este endpoint. Para dar continuidade ao desenvolvimento optei por realizar os testes desabilitando a função de web-security do Chrome. Para isso, criei um atalho com as seguintes configurações:
> ```
> "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp"
>```
> Além disso, alterei uma configuração do arquivo *config.xml* do **cordava**:
>
> ```
> <platform name="android">
>     ...
>      + <preference name="AndroidInsecureFileModeEnabled" value="true" />
>     ...
> </platform>
> ```
>
> Solução semelhante foi adotada no arquivo *cypress.config.js* de configurações do **cypress**:
>
>```
>module.exports = defineConfig({
>   chromeWebSecurity: false,
>   ...
>})
>```
>
> Com estas alterações foi possivel executar a requisição à API, tanto no navegador, no apk instalado em dispositivo Android físico e nos testes executados com o cypress (utilizando o Chrome).

![tela1](/docs/image1.jpeg?raw=true)
![tela2](/docs/image2.jpeg?raw=true)



## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "D:\\splendor\\framework7\\splendor-app-sample",
  "type": [
    "cordova"
  ],
  "name": "Splendor App Sample",
  "pkg": "io.framework.splendor.appsample",
  "framework": "core",
  "template": "single-view",
  "bundler": "vite",
  "cssPreProcessor": false,
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen"
    ]
  },
  "theming": {
    "customColor": true,
    "color": "#3DA9FC",
    "darkMode": false,
    "iconFonts": true
  },
  "customBuild": false
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-cordova` - build cordova app
* 📱 `build-cordova-ios` - build cordova iOS app
* 📱 `cordova-ios` - run dev build cordova iOS app
* 📱 `build-cordova-android` - build cordova Android app
* 📱 `cordova-android` - run dev build cordova Android app

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.


## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```



## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)



* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7
