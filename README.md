# Expect Fail

Examples of unit tests packages with tests that are allowed to fail. 

## Spec

Each example contains two tests: 

 * One always successful
 * One randomly "flaky" test
    * a random number between 0 and 1 is greater than 0.5

These tests run multiple times over should always return exit code 0 and continue, emulating an oft-running test suite. 