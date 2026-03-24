/**
 * Binary Patterns for the visualizations.
 * 15x15 grids.
 */

const createGrid = (size: number) => Array.from({ length: size }, () => Array(size).fill(0));

// Heart Pattern (IMG-001)
export const HEART_PATTERN = (() => {
  const grid = createGrid(15);
  // Heart logic (approximate)
  const heartRows = [
    [3, 4, 10, 11],
    [2, 3, 4, 5, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
    [4, 5, 6, 7, 8, 9, 10],
    [5, 6, 7, 8, 9],
    [6, 7, 8],
    [7]
  ];
  heartRows.forEach((cols, rowIndex) => {
    const row = rowIndex + 2;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();

// Star Pattern (IMG-002)
export const STAR_PATTERN = (() => {
  const grid = createGrid(15);
  // Star logic (approximate)
  const starRows = [
    [7],
    [7],
    [6, 7, 8],
    [6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [4, 5, 6, 7, 8, 9, 10],
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2, 3, 11, 12],
    [1, 2, 12, 13]
  ];
  starRows.forEach((cols, rowIndex) => {
    const row = rowIndex + 2;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();

// Arrow Pattern (IMG-003)
export const ARROW_PATTERN = (() => {
  const grid = createGrid(15);
  // Arrow logic
  const arrowRows = [
    [7],
    [6, 7, 8],
    [5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 10],
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
    [7],
    [7],
    [7],
    [7],
    [7],
    [7],
    [7],
    [7],
    [7]
  ];
  arrowRows.forEach((cols, rowIndex) => {
    const row = rowIndex + 1;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();

// Smiley Pattern (IMG-004)
export const SMILEY_PATTERN = (() => {
  const grid = createGrid(15);
  // Smiley face logic
  // Eyes
  grid[4][5] = 1; grid[4][9] = 1;
  grid[5][5] = 1; grid[5][9] = 1;
  // Mouth
  grid[9][4] = 1; grid[9][10] = 1;
  grid[10][5] = 1; grid[10][6] = 1; grid[10][7] = 1; grid[10][8] = 1; grid[10][9] = 1;
  // Circle outline (partial)
  for(let i=0; i<15; i++) {
    for(let j=0; j<15; j++) {
      const d = Math.sqrt(Math.pow(i-7,2) + Math.pow(j-7,2));
      if(d > 6 && d < 7.5) grid[i][j] = 1;
    }
  }
  return grid;
})();

// Letter C Pattern (IMG-005)
export const LETTER_C_PATTERN = (() => {
  const grid = createGrid(15);
  // Letter C logic
  const cRows = [
    [4,5,6,7,8,9,10],
    [3,4,5,6,7,8,9,10,11],
    [2,3],
    [2,3],
    [2,3],
    [2,3],
    [2,3],
    [2,3],
    [2,3],
    [2,3],
    [2,3],
    [3,4,5,6,7,8,9,10,11],
    [4,5,6,7,8,9,10]
  ];
  cRows.forEach((cols, rowIndex) => {
    const row = rowIndex + 1;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();

// Skull Pattern (IMG-006)
export const SKULL_PATTERN = (() => {
  const grid = createGrid(15);
  // Skull shape
  const skullData = [
    [4,5,6,7,8,9,10],
    [3,4,5,6,7,8,9,10,11],
    [2,3,4,5,6,7,8,9,10,11,12],
    [2,3,4,5,6,7,8,9,10,11,12],
    [2,3,4,5,6,7,8,9,10,11,12],
    [2,3,4,5,6,7,8,9,10,11,12],
    [2,3,4,5,6,7,8,9,10,11,12],
    [3,4,5,6,7,8,9,10,11],
    [3,4,5,10,11],
    [4,5,6,8,9,10],
    [5,6,7,8,9]
  ];
  skullData.forEach((cols, rowIndex) => {
    const row = rowIndex + 2;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  // Eyes
  grid[4][5] = 0; grid[4][6] = 0;
  grid[5][5] = 0; grid[5][6] = 0;
  grid[4][8] = 0; grid[4][9] = 0;
  grid[5][8] = 0; grid[5][9] = 0;
  // Nose
  grid[7][7] = 0;
  return grid;
})();

// Rocket Pattern (IMG-007)
export const ROCKET_PATTERN = (() => {
  const grid = createGrid(15);
  // Rocket nose
  grid[1][7] = 1;
  grid[2][6] = 1; grid[2][7] = 1; grid[2][8] = 1;
  grid[3][5] = 1; grid[3][6] = 1; grid[3][7] = 1; grid[3][8] = 1; grid[3][9] = 1;
  // Body
  for(let i=4; i<=10; i++) {
    grid[i][6] = 1; grid[i][7] = 1; grid[i][8] = 1;
  }
  // Window
  grid[6][7] = 0;
  grid[7][7] = 0;
  // Fins
  grid[9][4] = 1; grid[9][5] = 1;
  grid[10][3] = 1; grid[10][4] = 1; grid[10][5] = 1;
  grid[9][9] = 1; grid[9][10] = 1;
  grid[10][9] = 1; grid[10][10] = 1; grid[10][11] = 1;
  // Flames
  grid[11][6] = 1; grid[11][7] = 1; grid[11][8] = 1;
  grid[12][5] = 1; grid[12][7] = 1; grid[12][9] = 1;
  grid[13][6] = 1; grid[13][8] = 1;
  return grid;
})();

// Gear Pattern (IMG-008)
export const GEAR_PATTERN = (() => {
  const grid = createGrid(15);
  // Outer teeth
  grid[1][6] = 1; grid[1][7] = 1; grid[1][8] = 1;
  grid[2][5] = 1; grid[2][9] = 1;
  grid[3][4] = 1; grid[3][10] = 1;
  grid[4][3] = 1; grid[4][11] = 1;
  grid[5][2] = 1; grid[5][12] = 1;
  grid[6][1] = 1; grid[6][13] = 1;
  grid[7][1] = 1; grid[7][13] = 1;
  grid[8][1] = 1; grid[8][13] = 1;
  grid[9][2] = 1; grid[9][12] = 1;
  grid[10][3] = 1; grid[10][11] = 1;
  grid[11][4] = 1; grid[11][10] = 1;
  grid[12][5] = 1; grid[12][9] = 1;
  grid[13][6] = 1; grid[13][7] = 1; grid[13][8] = 1;
  // Fill inner circle
  for(let i=4; i<=10; i++) {
    for(let j=4; j<=10; j++) {
      const d = Math.sqrt(Math.pow(i-7,2) + Math.pow(j-7,2));
      if(d <= 3.5) grid[i][j] = 1;
    }
  }
  // Center hole
  grid[6][7] = 0; grid[7][6] = 0; grid[7][7] = 0; grid[7][8] = 0; grid[8][7] = 0;
  return grid;
})();

// Lightning Pattern (IMG-009)
export const LIGHTNING_PATTERN = (() => {
  const grid = createGrid(15);
  const lightningData = [
    [8,9],
    [7,8,9],
    [6,7,8],
    [5,6,7],
    [4,5,6,7,8,9,10],
    [7,8,9],
    [6,7,8],
    [5,6,7],
    [4,5,6],
    [3,4,5],
    [2,3,4],
    [1,2,3]
  ];
  lightningData.forEach((cols, rowIndex) => {
    const row = rowIndex + 1;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();

// Infinity Pattern (IMG-010)
export const INFINITY_PATTERN = (() => {
  const grid = createGrid(15);
  // Left loop
  for(let i=0; i<15; i++) {
    for(let j=0; j<15; j++) {
      const d1 = Math.sqrt(Math.pow(i-7,2) + Math.pow(j-4,2));
      const d2 = Math.sqrt(Math.pow(i-7,2) + Math.pow(j-10,2));
      if((d1 > 2.5 && d1 < 3.5) || (d2 > 2.5 && d2 < 3.5)) {
        grid[i][j] = 1;
      }
    }
  }
  return grid;
})();

// Diamond Pattern (IMG-011)
export const DIAMOND_PATTERN = (() => {
  const grid = createGrid(15);
  const diamondData = [
    [7],
    [6,7,8],
    [5,6,7,8,9],
    [4,5,6,7,8,9,10],
    [3,4,5,6,7,8,9,10,11],
    [2,3,4,5,6,7,8,9,10,11,12],
    [1,2,3,4,5,6,7,8,9,10,11,12,13],
    [2,3,4,5,6,7,8,9,10,11,12],
    [3,4,5,6,7,8,9,10,11],
    [4,5,6,7,8,9,10],
    [5,6,7,8,9],
    [6,7,8],
    [7]
  ];
  diamondData.forEach((cols, rowIndex) => {
    const row = rowIndex + 1;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();

// Hourglass Pattern (IMG-012)
export const HOURGLASS_PATTERN = (() => {
  const grid = createGrid(15);
  const hourglassData = [
    [2,3,4,5,6,7,8,9,10,11,12],
    [2,3,4,5,6,7,8,9,10,11,12],
    [3,4,5,6,7,8,9,10,11],
    [4,5,6,7,8,9,10],
    [5,6,7,8,9],
    [6,7,8],
    [7],
    [6,7,8],
    [5,6,7,8,9],
    [4,5,6,7,8,9,10],
    [3,4,5,6,7,8,9,10,11],
    [2,3,4,5,6,7,8,9,10,11,12],
    [2,3,4,5,6,7,8,9,10,11,12]
  ];
  hourglassData.forEach((cols, rowIndex) => {
    const row = rowIndex + 1;
    cols.forEach(col => { if(grid[row]) grid[row][col] = 1; });
  });
  return grid;
})();
