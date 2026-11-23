Navbar from abdullah-portfolio. Use via `window.PortfolioDS.Navbar` (bundle loaded from the root `_ds_bundle.js`).

## Examples

### Bar

```jsx
() => (
  <Frame height={100}>
    <Navbar />
  </Frame>
)
```

### OverPageContent

```jsx
() => (
  <Frame height={260}>
    <div className="grid-bg absolute inset-0" />
    <Navbar />
    <div className="relative pt-28 px-6 max-w-6xl mx-auto">
      <p className="section-label">01 / about</p>
      <h2 className="font-display font-bold text-4xl mt-3">
        Building things that <span className="gradient-text">actually work</span>
      </h2>
    </div>
  </Frame>
)
```
