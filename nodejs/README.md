## Mocha-helpers 'allowFail'

https://github.com/kellyselden/mocha-helpers

Test with `./run_tests.sh`


Excepted output when tests pass

```
> main@1.0.0 test
> mocha --reporter spec



  Run.test.js
    ✔ success

  Run.test.js
    ✔ flaky test


  2 passing (3ms)
```

Excepted output when tests fail, but don't error 

```

> main@1.0.0 test
> mocha --reporter spec



  Run.test.js
    ✔ success

  Run.test.js
    - flaky test


  1 passing (6ms)
  1 pending
```