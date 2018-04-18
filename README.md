# Demonstration of a problem with flow types in js-lingui.

See file [App.js](src/App.js), which has flow type checking enabled.

Notice that type Props is defined as an intersection of some random prop with the `withI18nProps` type.

```
type Props = {|
  foo: string
|} & withI18nProps;
```

Notice that an attempt to use a property not declared in the Props type is not reported as an error:

`console.log('forbidden prop', this.props.x)`

Notice also that deleting `withI18nProps` type from the intersection allows Flow to report the error properly, as it is expected.


=========

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
