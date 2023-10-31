## Pytest `xfail`

https://docs.pytest.org/en/stable/how-to/skipping.html

Test with `./run_tests.sh`


Excepted output when tests pass

```

===================================== test session starts ======================================
platform darwin -- Python 3.11.4, pytest-7.4.0, pluggy-1.2.0
rootdir: /Users/glasnt/tmp/xfail/python
plugins: Faker-19.1.0, anyio-3.7.1, typeguard-4.1.5
collected 2 items                                                                              

main_test.py .X                                                                          [100%]

================================= 1 passed, 1 xpassed in 0.03s =================================
```

Excepted output when tests fail, but don't error 

```
===================================== test session starts ======================================
platform darwin -- Python 3.11.4, pytest-7.4.0, pluggy-1.2.0
rootdir: /Users/glasnt/tmp/xfail/python
plugins: Faker-19.1.0, anyio-3.7.1, typeguard-4.1.5
collected 2 items                                                                              

main_test.py .x                                                                          [100%]

================================= 1 passed, 1 xfailed in 0.04s =================================
```