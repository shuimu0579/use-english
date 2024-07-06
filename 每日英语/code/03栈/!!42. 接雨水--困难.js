function trap(height) {
  let result = 0;
  const stack = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] >= height[stack[stack.length - 1]]) {
      console.log("i", i);
      console.log("stack in while", stack);
      const top = stack.pop();
      if (stack.length === 0) {
        break;
      }
      const distance = i - stack[stack.length - 1] - 1;
      const boundedHeight =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      console.log("distance", distance);
      console.log("boundedHeight", boundedHeight);
      result += distance * boundedHeight;
    }

    stack.push(i);
    console.log("stack out while", stack);
  }

  return result;
}

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
