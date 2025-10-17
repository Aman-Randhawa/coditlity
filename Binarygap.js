function solution(N) {
    // Convert the number to its binary representation
    const binary = N.toString(2);
    
    // Split the binary string by '1' to isolate sequences of zeros
    const gaps = binary.split('1');
    
    // Remove the last element if the binary ends with zeros (no closing '1')
    if (binary.endsWith('0')) {
        gaps.pop();
    }
    
    // Find the length of the longest gap
    const longestGap = gaps.reduce((max, gap) => Math.max(max, gap.length), 0);
    
    return longestGap;
}
