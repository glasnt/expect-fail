#!/bin/bash

# exit as soon as a test fails. 
set -e

for i in {1..10}
do
    npm test
done