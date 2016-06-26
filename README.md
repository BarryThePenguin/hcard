# Frontend Dev Test

## run

```
npm install
npm start
```

## build

```
npm run build
```

## decisions

### [react](https://facebook.github.io/react/)

Passing application state down through components allows different components to stay in sync when application state changes. This technique is used in the `Card` and `Form` components to automatically update the preview when the user enters their details.

### [babel](https://babeljs.io/)

Writing `react` without `es2015` features is just no fun. Include it to get those sweet sugary syntax gains.

### [bootstrap](http://getbootstrap.com/)

Comes with a responsive grid and sensible styles for form inputs. Though it does require a lot of elements and classes, it helps with prototyping and getting web applications up and running. It can be gradually replaced, a component at a time, with our own UI framework.

### [sass](http://sass-lang.com/)

My css preprocessor of choice recently, though `postcss` is quite enjoyable and works well with `webpack` and `css-modules` etc

### [xo](https://github.com/sindresorhus/xo)

Simple, low config, linting that just works

### [webpack](http://webpack.github.io/)

When building reusable components for the web it is useful to build the components, and any dependencies, separate to the rest of the solution. This separation creates a lot of files, which are difficult to quickly serve on the internet, in turn degrading the users experience of the application. `webpack` solves this problem by bundling all the component files and dependencies into larger bundles, which decreases the number connections required.

`webpack` also provides other utilities like code minification, code elimination, and tree shaking (v2). These utilities all work together to decrease the size of application bundles and improve the performance of libraries such as `react`

### old-ie

IE9 does not support `FileReader` so users can not add an avatar image. Consider disabling/hiding the `Upload Avatar` button or looking for an alternative for IE9 users.

IE8 is not supported, this could be explored by downgrading to `react@0.14`. While `Bootstrap` requires the use of `Respond.js` in IE8.
