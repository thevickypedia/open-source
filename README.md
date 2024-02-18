# Open Source
A repository to share resources across different modules

To source data from this repository please use any of the following links

### For images and other data-types
```text
https://raw.githubusercontent.com/thevickypedia/open-source/main/
```

Alternatively, the following can be used which will eventually redirect to `raw.githubusercontent.com`
- URL query param, `?raw=true`, example:
  - https://github.com/thevickypedia/open-source/blob/main/images/logout.gif?raw=true
- URL hostname `raw.github.com`, example:
  - https://raw.githubusercontent.com/thevickypedia/open-source/main/images/logout.gif

### For CSS and JS

**Format:**
```text
https://[username].github.io/[repository]/[filename].js
```

```html
<script src="https://thevickypedia.github.io/open-source/nightmode/night.js" defer></script>
<link rel="stylesheet" href="https://thevickypedia.github.io/open-source/nightmode/night.css">
```

- `raw.github.com` cannot be used for web UI since GitHub changed the `Content-Type`
  - Refer [GitHub blog][blog]
- Users may also experience `(failed)net::ERR_BLOCKED_BY_ORB` 

[blog]: https://github.blog/2013-04-24-heads-up-nosniff-header-support-coming-to-chrome-and-firefox/
