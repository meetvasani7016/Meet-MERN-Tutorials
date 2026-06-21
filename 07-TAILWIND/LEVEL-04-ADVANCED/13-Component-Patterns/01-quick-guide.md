# Tailwind CSS Component Patterns

## In One Line
Compose and modularize utility classes using templates or CSS directive configurations.

## Think Like This
Creating a rubber stamp tool containing a combined design (e.g. @apply btn styles) instead of drawing the button from scratch every time.

## Example
```html
.btn-custom { @apply bg-indigo-500 text-white px-4 py-2 rounded; }
```

## Result
Bundles multiple utility classes into a clean, reusable CSS class name.

## Remember
Only use @apply when class lists become extremely long and hard to navigate in templates.
