# Kamel's end-to-end test suite

### How to run

```bash
git clone git@github.com:SaltErik/kamel-e2e.git
cd kamel-e2e
./init.sh
```

***

### Configuration (optional)

By default, the tests are set to run against "https://polychat.live".

You can change the target URL (for *the entire test suite*) in just a single line of code. Pretty convenient.

Simply open the "cypress.json" file (located in the root folder) and set the value of "baseUrl" to your desired target URL.

To test locally (for example), you would set the value of "baseUrl" to "http://localhost:3000" (or equivalent).
