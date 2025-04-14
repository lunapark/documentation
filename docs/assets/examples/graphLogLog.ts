export const graphLogLog = {
    "nodes": {
        "16f85052-d290-4d1b-bf27-7b9ccefc5ba0": {
            "internal": { "inputs": { "in_object": "World" } },
            "location": { "x": 8, "y": -2 },
            "logic": "debug/log"
        },
        "37705e7b-fcdc-4002-99e9-55dc128796f7": {
            "internal": { "inputs": { "in_object": "Hello" } },
            "location": { "x": -5, "y": -2 },
            "logic": "debug/log"
        },
        "4bb989b1-5afa-4501-b0a4-d03078e908da": {
            "data": { "_size": { "x": 10, "y": 4 } },
            "location": { "x": -18, "y": -2 },
            "logic": "debug/play"
        }
    },
    "wires": {
        "1fbad025-026a-43c6-b5e7-c422ce4c6598": {
            "from": {
                "key": "out_exec",
                "node": "4bb989b1-5afa-4501-b0a4-d03078e908da"
            }, "to": { "key": "in_exec", "node": "37705e7b-fcdc-4002-99e9-55dc128796f7" }
        },
        "dd325dd2-f232-4842-83f9-8578aa910c52": {
            "from": {
                "key": "out_exec",
                "node": "37705e7b-fcdc-4002-99e9-55dc128796f7"
            }, "to": { "key": "in_exec", "node": "16f85052-d290-4d1b-bf27-7b9ccefc5ba0" }
        }
    }
};
