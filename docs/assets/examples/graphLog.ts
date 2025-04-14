export const graphLog = {
    "nodes": {
        "400b8a31-e191-47cf-aa1e-28331cbb3d6a": {
            "data": { "_size": { "x": 10, "y": 4 } },
            "location": { "x": -12, "y": -2 },
            "logic": "debug/play"
        },
        "caaba131-5e7f-48e3-92a8-45fc21f031b4": {
            "internal": { "inputs": { "in_object": "Hello World!" } },
            "location": { "x": 2, "y": -2 },
            "logic": "debug/log"
        }
    },
    "wires": {
        "10c9de90-f2cc-4111-a7ac-94ea1f096eb0": {
            "from": {
                "key": "out_exec",
                "node": "400b8a31-e191-47cf-aa1e-28331cbb3d6a"
            }, "to": { "key": "in_exec", "node": "caaba131-5e7f-48e3-92a8-45fc21f031b4" }
        }
    }
};
