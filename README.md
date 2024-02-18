# Open Source
A repository to share resources across different modules

To source data from this repository please use any of the following links

### For programming languages
```text
https://raw.githubusercontent.com/thevickypedia/open-source/main/
```

### For injecting into web UI

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
