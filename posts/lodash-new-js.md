---
title: Replacing lodash.get with Nullish Coalescing and Optional Chaining
date: '2019-12-15'
tags:
  - 'coding'
---

[lodash](https://lodash.com/) is a popular javascript library with a set of utilities. One of the utilities that lodash provides is the [get](https://lodash.com/docs/4.17.15#get) function which, as the name suggests is used to get a value from an object. Let us see an example:

Suppose there is an object:

```js
let response = {
  data: {
    options: {
      name: 'Bojack'
    }
  }
};
```

Now if you wanted to get the `name` from the above object, you would typically do it like this:

```js
const name = response.data.options.name;
console.log(name);
```

And this will work and output the name `Bojack`. No Worries, Right?

Well, for the most part, it is. Let me explain. Say, for example, this object is a response from an API and because the coding gods are angry on you, the object has a structure different from what you think it will be. The key `options` in the `data` object is now called `user_options` and the code you've written does not account for that. Now if you run the code to get the value of name this is what will happen:

Since `data.options` is `undefined` and you are trying to access the `name` property of `undefined`, you end up with a `TypeError`.

To make sure you do not end up in such a situation, you have to put up safety checks in your code. For example, we can do something like this:

```js
const name = (response.data && response.data.options && response.data.options.name) || 'Todd';
```

This will make sure that if at any level of the object, the property you are trying to access is `undefined`, you do not try to access properties further down the chain and thus, do not end up with a `TypeError`. Also, if the property we are trying to access is undefined, `Todd` gets assigned to the name which kind of acts as a fallback value.

However, as you can see in the code, for large objects, the above code segment can be very cumbersome to write.

> Enter lodash.

The lodash `get` function lets you easily implement safe checks while getting data from objects. If we use lodash for the above example, we can do it like this:

```js
const name = _.get(response, 'data.options.name');
```

This will make sure that you do not end up with errors and also don't have to write complex accessor chains like in the example before this one.

Another beauty of the lodash `get` function is that you can specify an optional 3rd argument which is the default value to return when the property you are trying to access is falsy. For example,

```js
const name = _.get(response, 'data.options.name', 'Todd');
```

will return Todd if the `options` key on `data` does not exist.

So we solved both of the problems we ran into while writing property accessors.

Win-Win right?

Well, not exactly. lodash is essentially a 3rd party dependency and you must have heard the saying `mo dependencies, mo problems`. Some of these problems include increased bundle size and the responsibility of keeping dependencies up to date.

However, there seems to be a solution coming up in javascript itself. There have been two proposals to add the following two features to the language itself - [optional chaining](https://v8.dev/features/optional-chaining) and [nullish coalescing](https://v8.dev/features/nullish-coalescing).

Let us see how these language features can help us in replacing lodash with native javascript.

## Optional Chaining

As also shown above, this is how you would safely access the `name` property from the response object.

```js
const name = _.get(response, 'data.options.name');
```

This is how you can do it without lodash by using optional chaining:

```js
const name = response?.data?.options?.name;
```

The above statement behaves similar to how our code with a lot of `&&` safe checks would behave, but looks a lot cleaner!

## Nullish Coalescing

So we now have safety checks in property accessors, but what about default values? If I am unable to find the name property, I want to assign the name `Todd` to the `name` variable.

Here is how you can do it by using nullish coalescing:

```js
const name = response?.data?.options?.name ?? 'Todd';
```

In the above statement, we combined the use of _optional chaining_ and _nullish coalescing_ to achieve the same result that we were getting by using lodash or making the use of `&&` and `||` operators. If I am unable to access the property `name` from the `response` object, due to optional chaining, the name will have the default property `Todd` thanks to nullish coalescing.

**So can I go ahead and replace `lodash.get` in my app?**

Sure, but first check out the browser support for the respective features [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator#Browser_compatibility) and [here](https://caniuse.com/#feat=mdn-javascript_operators_optional_chaining) and if you develop for browsers where they aren't supported, you'll have to polyfill them.

Further Reading/References -

- [https://v8.dev/features/nullish-coalescing](https://v8.dev/features/nullish-coalescing)
- [https://2ality.com/2019/08/nullish-coalescing.html](https://2ality.com/2019/08/nullish-coalescing.html)
- [https://v8.dev/features/optional-chaining](https://v8.dev/features/optional-chaining)
- [https://2ality.com/2019/07/optional-chaining.html](https://2ality.com/2019/07/optional-chaining.html)
