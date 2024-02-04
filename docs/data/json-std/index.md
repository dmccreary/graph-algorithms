# JSON Graph Standard

## Node Standards

An array of ```nodes```

1. *id* - unique integer
2. *name* - label
3. *x* and *y* (if needed)

## Edges

1. *source* - integer reference to a node id
2. *target* - integer reference to a node id
3. *weight* - integer of the weight

```json
{
    "nodes": [
      { "id": 1, "name": "Node 1", "x": 100, "y": 100 },
      { "id": 1, "name": "Node 2", "x": 200, "y": 200 },
      { "id": 1, "name": "Node 3", "x": 100, "y": 300 }
    ],
    "edges": [
      { "source": 1, "target": 2, "weight": 10 },
      { "source": 2, "target": 3, "weight": 20 },
      { "source": 3, "target": 1, "weight": 30 }
    ]
  }
  ```

https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json