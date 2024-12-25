# Unexpected Null Handling in JavaScript Function

This repository demonstrates a subtle bug related to null handling in a JavaScript function. The `foo` function adds two numbers, but its null checks might be insufficient in various edge cases.

## Bug Description

The function `foo` handles cases where either `a` or `b` are explicitly `null`. However, it doesn't account for situations where `a` or `b` might be objects containing null properties.  This oversight could lead to unexpected behavior and potential errors in more complex applications.

## Solution

The proposed solution enhances null checks to handle objects with potentially null properties.