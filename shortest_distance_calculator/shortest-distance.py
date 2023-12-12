# APP for calculate shortest distance

import math

def calculate_distance(coord1, coord2):
    """Calculate the Euclidean distance between two points."""
    return math.sqrt((coord1[0] - coord2[0])**2 + (coord1[1] - coord2[1])**2)

def held_karp(coordinates):
    n = len(coordinates)
    # Map each subset of nodes to the cost to reach that subset, as well as what node it was reached from
    C = {}

    # Set distance from 0 to every other node
    for k in range(1, n):
        C[(1 << k, k)] = (calculate_distance(coordinates[0], coordinates[k]), 0)

    # Iterate subsets of increasing length and store intermediate results in a dictionary
    for subset_size in range(2, n):
        for subset in itertools.combinations(range(1, n), subset_size):
            # Set bits for all nodes in this subset
            bits = 0
            for bit in subset:
                bits |= 1 << bit

            # Find the lowest cost to get to this subset
            for k in subset:
                prev = bits & ~(1 << k)

                res = []
                for m in subset:
                    if m == 0 or m == k:
                        continue
                    res.append((C[(prev, m)][0] + calculate_distance(coordinates[m], coordinates[k]), m))
                C[(bits, k)] = min(res)

    # We're interested in all bits but the least significant (the start node)
    bits = (2**n - 1) - 1

    # Calculate optimal cost
    res = []
    for k in range(1, n):
        res.append((C[(bits, k)][0] + calculate_distance(coordinates[k], coordinates[0]), k))
    opt, parent = min(res)

    # Backtrack to find full path
    path = []
    for i in range(n - 1):
        path.append(parent)
        new_bits = bits & ~(1 << parent)
        _, parent = C[(bits, parent)]
        bits = new_bits

    # Add start city
    path.append(0)

    return opt, list(reversed(path))

import itertools


coordinates = [
    [923, 492, "Praha"],
    [757, 371, "Reykjavík"],
    [523, 551, "New York"],
    [300, 495, "Vancouver"],
    [434, 610, "Houston"],
    [509, 810, "Lima"],
    [783, 619, "Santa Cruz De Tenerife"],
    [970, 583, "Heraklion"],
    [1071, 839, "Antananarivo"],
    [1311, 692, "Bangkok"],
    [1550, 883, "Brisbane"],
    [1434, 579, "Daejeon"],
    [970, 410, "Helsinki"]
]

optimal_distance, path = held_karp(coordinates)
optimal_route = [coordinates[p][2] for p in path]

print("Optimal route:")
print(" -> ".join(optimal_route))
print(f"Optimal distance: {optimal_distance}")
