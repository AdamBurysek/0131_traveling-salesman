// This function adding boolean value to coordinates. It's for checking, if city is visited
export function modifyCoordinates(coordinates: any[]): any[] {
  const modifiedCoordinates = [...coordinates];

  // Set the first city to true (visited)
  if (modifiedCoordinates.length > 0) {
    modifiedCoordinates[0][6] = true;
  }

  // Set the rest of the cities to false (not visited)
  for (let i = 1; i < modifiedCoordinates.length; i++) {
    modifiedCoordinates[i][6] = false;
  }

  return modifiedCoordinates;
}
