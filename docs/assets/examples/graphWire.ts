export const graphWire = {
    "nodes": {
        "1812984e-08df-462b-9db0-07d9f1052d64": { "location": { "x": -3, "y": 2 }, "logic": "debug/log" },
        "3e0fc9fd-f9a6-4fb4-8952-d7a9e7c5bca2": {
            "data": { "_size": { "x": 2, "y": 2 } },
            "location": { "x": -7, "y": 3 },
            "logic": "pin/exec"
        },
        "4833c770-ebf7-418b-a44c-c7f4cc4c0d68": {
            "data": { "_size": { "x": 2, "y": 2 } },
            "location": { "x": -3, "y": 0 },
            "logic": "pin/exec"
        },
        "53d4923e-7ba5-4211-8528-de65476b775f": {
            "data": { "_size": { "x": 2, "y": 2 } },
            "location": { "x": -8, "y": 4 },
            "logic": "pin/standard"
        },
        "611b1766-7a81-4cbf-b72f-6390765e2788": { "location": { "x": -4, "y": -6 }, "logic": "flow/forEach" },
        "8bda49c1-e13a-492b-8b41-6d25a15eeef5": { "location": { "x": 9, "y": -2 }, "logic": "debug/log" },
        "c4a29738-0f85-476d-9cb9-ea09bb9dd18f": {
            "data": { "_size": { "x": 10, "y": 4 } },
            "location": { "x": -19, "y": -4 },
            "logic": "debug/play"
        },
        "de4d8ab6-0640-4e63-b3cd-cda51cc82f7e": {
            "internal": {
                "inputs": {
                    "in_separator": " ",
                    "in_target": "Hello world"
                }
            }, "location": { "x": -19, "y": 1 }, "logic": "string/split"
        }
    }, "wires": {
        "0bb84406-5080-404e-a1dc-bbdd46048018": {
            "from": {
                "key": "out_result",
                "node": "de4d8ab6-0640-4e63-b3cd-cda51cc82f7e"
            }, "to": { "key": "in_", "node": "53d4923e-7ba5-4211-8528-de65476b775f" }
        },
        "2f5b33c0-b502-43a5-9f76-0a80f2a0f9ca": {
            "from": {
                "key": "out_",
                "node": "53d4923e-7ba5-4211-8528-de65476b775f"
            }, "to": { "key": "in_object", "node": "1812984e-08df-462b-9db0-07d9f1052d64" }
        },
        "4568c288-5c2c-4449-b8ce-49bd4fa89ff1": {
            "from": {
                "key": "out_0loop",
                "node": "611b1766-7a81-4cbf-b72f-6390765e2788"
            }, "to": { "key": "in_exec", "node": "8bda49c1-e13a-492b-8b41-6d25a15eeef5" }
        },
        "4b0a640f-f78a-4940-8a6c-8f8de6eecbd3": {
            "from": {
                "key": "out_exec",
                "node": "c4a29738-0f85-476d-9cb9-ea09bb9dd18f"
            }, "to": { "key": "in_", "node": "3e0fc9fd-f9a6-4fb4-8952-d7a9e7c5bca2" }
        },
        "69356bd0-bee1-46ce-812f-902fffc9819d": {
            "from": {
                "key": "out_",
                "node": "3e0fc9fd-f9a6-4fb4-8952-d7a9e7c5bca2"
            }, "to": { "key": "in_exec", "node": "1812984e-08df-462b-9db0-07d9f1052d64" }
        },
        "7543b36a-1979-48c9-950c-4134884a6fdc": {
            "from": {
                "key": "out_result",
                "node": "de4d8ab6-0640-4e63-b3cd-cda51cc82f7e"
            }, "to": { "key": "in_array", "node": "611b1766-7a81-4cbf-b72f-6390765e2788" }
        },
        "7fc6f239-e645-4d27-bc8a-70ce4af7bdbb": {
            "from": {
                "key": "out_1child",
                "node": "611b1766-7a81-4cbf-b72f-6390765e2788"
            }, "to": { "key": "in_object", "node": "8bda49c1-e13a-492b-8b41-6d25a15eeef5" }
        },
        "b4b4643c-f7fa-4c6c-8a60-2f78f48a5983": {
            "from": {
                "key": "out_exec",
                "node": "1812984e-08df-462b-9db0-07d9f1052d64"
            }, "to": { "key": "in_", "node": "4833c770-ebf7-418b-a44c-c7f4cc4c0d68" }
        },
        "d58d4029-7960-4efd-af82-e52fda02154d": {
            "from": {
                "key": "out_",
                "node": "4833c770-ebf7-418b-a44c-c7f4cc4c0d68"
            }, "to": { "key": "in_exec", "node": "611b1766-7a81-4cbf-b72f-6390765e2788" }
        }
    }
};
