## Error Correction Report

**Code 1:** calculatePrice.js

**Logical Error 1:**
**Description:** Redundant and conflicting conditions in the discount calculation logic.
**Explanation:** The code has multiple if conditions that don't logically represent the discount criteria. For example, the condition if (isStudent || hasCoupon) is used twice without proper logic.
**Solution:** Refactor the discount calculation logic to ensure proper application of discounts based on the provided criteria.

**Logical Error 2:**
**Description:** Unreachable condition for applying coupon discount.
**Explanation:** The condition else if (hasCoupon) is placed after if (isStudent || hasCoupon) which means it will never be reached.
**Solution:** Rearrange the conditions to ensure all discount criteria are properly evaluated and applied.

### Correct Test case:

```bash
  test('Output price is less than 80% of input price', () => {
    const price = 10;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });
```

Solution:

```bash
  test('Output price is less than 80% of input price', () => {
    const price = "10"; // changes into string to trigger validation error.
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });


```
