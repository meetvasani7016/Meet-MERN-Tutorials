# Tailwind CSS Customization

## In One Line
Extend and customize the default utility values inside the tailwind.config.js configuration file.

## Think Like This
Tuning a car's engine parameters or adding a custom paint swatches palette to the factory dashboard options.

## Example
```html
theme: { extend: { colors: { brandColor: '#7a22e8' } } }
```

## Result
Enables brand color utilities like bg-brandColor or text-brandColor.

## Remember
Always place custom color palettes inside the 'extend' object to keep from overwriting default color libraries.
