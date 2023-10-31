import pytest
from random import random


def test_success():
    assert 1 == 1


@pytest.mark.xfail(reason="Flaky test")
def test_failure():
    assert random() > 0.5
