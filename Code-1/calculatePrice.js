function calculatePrice(price, isStudent, hasCoupon) {
    // Validate input parameters
    if (typeof price !== "number" || price <= 0 || price >= 500) {
        throw new Error(
            "Error 01 - Invalid price: Price must be a positive number.",
        );
    }

    if (typeof isStudent !== "boolean") {
        throw new Error(
            "Error 02: Invalid isStudent type: It should be either true or false",
        );
    }

    if (typeof hasCoupon !== "boolean") {
        throw new Error(
            "Error 03: Invalid hasCoupon type: It should be either true or false",
        );
    }

    // Apply discounts based on conditions
    let finalPrice = price;
    if (isStudent && hasCoupon) {
        // Apply maximum discount for students with coupons
        finalPrice *= 0.8; // 20% discount
    } else if (isStudent) {
        // Apply student discount
        finalPrice *= 0.9; // 10% discount
    } else if (hasCoupon) {
        // Apply coupon discount
        finalPrice *= 0.95; // 5% discount
    }

    // Validate final price
    if (
        typeof finalPrice !== "number" ||
        finalPrice < 0.8 * price ||
        finalPrice > price
    ) {
        throw new Error(
            "Error 04 - Invalid price: Calculated price is not within valid range.",
        );
    }

    return finalPrice;
}

module.exports = calculatePrice;
