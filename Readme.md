## TLDR

Wrapper over SVG stroke animation. Quick [demo](https://codesandbox.io/s/strokedashoffset-6lxhsj)


## Documentation

Component extends `ComponentProps<'svg'>` while adding **progress** prop as a **percentage**.

```tsx
type StrokeDashoffsetProps = ComponentProps<'svg'> & {
children: JSX.Element
svg?: JSX.Element
progress: number
strokeColor?: string
strokeWidth?: number
pathLength?: number
}

```

Only 1 🌶 path/polygon/circle/... should be the `children` so that when **progress** value changes a clone will draw itself. Use **strokeColor** and **strokeWidth** to customize it. 


```tsx

<StrokeDashoffset
        width="100"
        height="100"
        viewBox="0 0 50 50"
        strokeColor="red"
        progress={progress}
      >
<polygon points="12 2, 22 22, 2 22" fill="none" stroke="blue" />
</StrokeDashoffset>

```

Most likely you'll want to compose richer vectors and only 1 children will not do. As escape hatch you can use prop **svg** as demo shows. 


### Inspiration

> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**.
