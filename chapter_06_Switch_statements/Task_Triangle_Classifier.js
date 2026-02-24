function classifyTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Not a valid triangle";
    }

    if (a === b && b === c) {
        return "Equilateral triangle";
    }
    if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    }
    return "Scalene triangle";
}

// Example usage:
console.log(classifyTriangle(3, 3, 3)); // Equilateral triangle
console.log(classifyTriangle(3, 4, 4)); // Isosceles triangle
console.log(classifyTriangle(3, 4, 5)); // Scalene triangle
console.log(classifyTriangle(-1, 4, 5)); // Not a valid triangle