# kamel's end-to-end testing suite

### Install and run in three simple steps

```bash
git clone git@github.com:SaltErik/kamel-e2e.git
cd kamel-e2e
./init.sh
```

### Configuration (optional)

By default, the Cypress will target "https://polychat.live".

You can configure the target URL in the "cypress.json" file, by changing the value of "baseUrl".

To test locally, set baseUrl to "http://localhost:3000" (or equivalent).
