# Kamel's end-to-end test suite

### How to run

```bash
git clone git@github.com:SaltErik/kamel-e2e.git
cd kamel-e2e
./init.sh
```

***

### Configuration (optional)

By default, the tests run against "https://polychat.live".

You can configure the target URL (for *all* the tests) in a single, convenient place.

Simply open the "cypress.json" file (located in the root folder) and change the value of "baseUrl" to the desired target.

To test locally (for example), you would set baseUrl to "http://localhost:3000" (or equivalent).
