export const graphIf = {
    "nodes": {
        "02616cc0-fb9e-4fc4-94f8-0b10779a1df8": {
            "internal": { "inputs": { "in_object": "B" } },
            "location": { "x": 7, "y": 1 },
            "logic": "debug/log"
        },
        "32e2c5ef-52a6-493a-b185-2f0ba8be474e": {
            "data": { "_size": { "x": 10, "y": 4 } },
            "location": { "x": -18, "y": -2 },
            "logic": "debug/play"
        },
        "7bf624f8-5e9b-401f-89aa-15a8131b050e": {
            "internal": { "inputs": { "in_condition": true } },
            "location": { "x": -6, "y": -2 },
            "logic": "flow/if"
        },
        "84b1227a-6612-4b23-a6bf-7693215d8ab4": {
            "internal": { "inputs": { "in_object": "A" } },
            "location": { "x": 7, "y": -4 },
            "logic": "debug/log"
        }
    },
    "wires": {
        "0c0326bb-f1e9-4d6f-8e42-17a8522dc7c7": {
            "from": {
                "key": "out_exec",
                "node": "32e2c5ef-52a6-493a-b185-2f0ba8be474e"
            }, "to": { "key": "in_exec", "node": "7bf624f8-5e9b-401f-89aa-15a8131b050e" }
        },
        "785c0aa6-2f09-48de-8e17-16bbeef3d3e5": {
            "from": {
                "key": "out_1false",
                "node": "7bf624f8-5e9b-401f-89aa-15a8131b050e"
            }, "to": { "key": "in_exec", "node": "02616cc0-fb9e-4fc4-94f8-0b10779a1df8" }
        },
        "866397b5-58a7-4d40-a312-3efdf7d33491": {
            "from": {
                "key": "out_0true",
                "node": "7bf624f8-5e9b-401f-89aa-15a8131b050e"
            }, "to": { "key": "in_exec", "node": "84b1227a-6612-4b23-a6bf-7693215d8ab4" }
        }
    }
};
