export const graphFor = {
    "nodes": {
        "1b3d908e-93fd-4d10-a9c2-94e472bcdc7e": {
            "internal": { "inputs": { "in_object": "Done!" } },
            "location": { "x": 8, "y": 1 },
            "logic": "debug/log"
        },
        "41251c61-4128-4af1-a2ed-df4c8863b592": { "location": { "x": 8, "y": -4 }, "logic": "debug/log" },
        "698dc958-fb50-426a-b73e-ebfc4e846be6": {
            "data": { "_size": { "x": 10, "y": 4 } },
            "location": { "x": -18, "y": -2 },
            "logic": "debug/play"
        },
        "8e5d2f74-ff5a-4dc3-9701-2ebfde7daa08": {
            "internal": {
                "inputs": { "in_count": 3 },
                "outputs": { "out_1index": 2 }
            }, "location": { "x": -6, "y": -2 }, "logic": "flow/for"
        }
    },
    "wires": {
        "23f5a11a-b521-4a44-9608-cda5b0235508": {
            "from": {
                "key": "out_1index",
                "node": "8e5d2f74-ff5a-4dc3-9701-2ebfde7daa08"
            }, "to": { "key": "in_object", "node": "41251c61-4128-4af1-a2ed-df4c8863b592" }
        },
        "248ddeae-3f83-43f0-806c-248d760bd045": {
            "from": {
                "key": "out_0loop",
                "node": "8e5d2f74-ff5a-4dc3-9701-2ebfde7daa08"
            }, "to": { "key": "in_exec", "node": "41251c61-4128-4af1-a2ed-df4c8863b592" }
        },
        "4a34c13e-5e16-4f86-b4bb-2f91b3b96f49": {
            "from": {
                "key": "out_exec",
                "node": "698dc958-fb50-426a-b73e-ebfc4e846be6"
            }, "to": { "key": "in_exec", "node": "8e5d2f74-ff5a-4dc3-9701-2ebfde7daa08" }
        },
        "56b2bb4b-37d6-4166-b7b3-c1edafb10f4f": {
            "from": {
                "key": "out_2exit",
                "node": "8e5d2f74-ff5a-4dc3-9701-2ebfde7daa08"
            }, "to": { "key": "in_exec", "node": "1b3d908e-93fd-4d10-a9c2-94e472bcdc7e" }
        }
    }
};
