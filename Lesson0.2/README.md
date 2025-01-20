# Результат роботи методів

## flat(array, depth = 1): []

* flat([1, [2, [3, [4]]], 5]) - [ 1, 2, [ 3, [ 4 ] ], 5 ]
* flat([1, [[2], [3, [4]]], 5], 2) - [ 1, 2, 3, [ 4 ], 5 ]

## parse(json): {} | []

* parse(`
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016.23,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
    }`
 )
* parse(`[2, 4, 6, {"23": [123,456,432]}]`) - [ 2, 4, 6, { '23': [ 123, 456, 432 ] } ]

## parse2(json): {} | []

## stringify(obj): ""

* stringify({
    a: 1,
    b: "test",
    c: [1, 2, { x: 10, y: 20, z: 50 }],
    d: { nested: { key: "value" } },
    e: null,
    f: { 'asdsd': 'asdadssad', 'dsfd': [12, 34], "dasd": 234 }
}) - {"a":1,"b":"test","c":[1,2,{"x":10,"y":20,"z":50}],"d":{"nested":{"key":"value"}},"e":null,"f":{"asdsd":"asdadssad","dsfd":[12,34],"dasd":234}}

## reduce(array, callbackFn, initialValue)

* reduce(
    [1, 2, 3, 4],
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
) - 10
* reduceRight(
    [ [0, 1], [2, 3], [4, 5] ],
    (accumulator, currentValue) => accumulator.concat(currentValue)
) - [ 4, 5, 2, 3, 0, 1 ]

## quickSort(arr, compareFn): []

* quickSort([5, 2, 9, 1, 5, 6, 3, 7, 4, 8, 0]) - [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
