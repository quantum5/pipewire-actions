# pipewire-actions
Builds PipeWire that can be installed on GitHub Actions.

## Usage

```debsources
deb [trusted=yes] https://pipewire-ubuntu.quantum5.workers.dev ./
```

Due to GitHub releases mangling the file names and its redirects confusing
the Ubuntu versions used on GitHub Actions, a Cloudflare worker is used to
proxy. The source code is available [here](worker.js).

For GitHub Actions, add this to your workflow:

```yaml
- name: Add PipeWire repository
  run: echo 'deb [trusted=yes] https://pipewire-ubuntu.quantum5.workers.dev ./' | sudo tee /etc/apt/sources.list.d/pipewire.list
```

Then be sure to do `apt-get update` and then `apt-get install`.
