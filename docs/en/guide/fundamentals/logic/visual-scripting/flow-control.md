<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

# Flow Control

The logic flow is the order in which your nodes are executed. Usually, the flow start on a triggered event (manual play node, on load node, function...). Then, it follows the execution thread represented by a bold white link.

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgIz0hToAmApohTh27AGYAWCQE4A7AFpp0gMwR5EgExiArPIBGe3gDZ5RsJFKkJY-hKPLCIXhCwRHAJ0H8syMRFTw-JRgAK7wWKwAKlQADoKOOFAA+uh6AFb8YD7CUBAs-MggqRlZILTllIlY-O65qAlQMSFYQqCJKemZ2SAA6ujuqLxlXBjYeATCJEgAHJQ0SPIaI+gA5jhghQJ6ISsA9BgrZcFmfuy8EuoQ0nrq-LJi8tPsGmDyynrsykbTvNrKGipHM5XB4vNk-AEguAwhEWNE4q0QO1il1HLl8oUUaVylwqjU6g0mi0Gh0St0ABL8VAYYaUUYucaOKbybRzZCLZZrDZIJz8bZ7A5HECyaSkXjKMR6aSKIxiDTqGT8eQQfjKaaLP56CTTD68XgAoEuNzCJLwHAMAqTDgUajICRcTyBcH+QLLMb4Jns9izW0LJZ01brTZ8na7GKoCA0CogADuOEdjg0-FIRnYEnOiwkEBMElIeleemm-2VsggpBeelIynY0ktoDE7lYjgA1vx5kVmkl+ERMiBKDwBIURWKJVKZXKFbXlar1RpNdrdfrpEKIi224V2t3e-2+JbwCcIGcLlnrrd7o9nq93p9vr9-oDo8pZOLrJ95JBtMfSOxXtMNBB5Q0UhJFzcwIG0CAJEcBsm2EVt23QTstw2HdBx5MADyPS5TwkO4HieF43g+L4fj+AEHC4Vc4PXHlNx7FDuF3QowFEEC5EUFQ1E0HR9EMEwzAsKwbDsCicSAA"/>

Flow control allows you to define the **execution order** of nodes in your graph and manage **conditions** or **repetitions** of actions.

Flow control is divided into three main categories:
- **Triggers**: Start the execution flow.
- **Conditional Nodes**: Change the execution flow based on a condition.
- **Loops**: Repeat actions based on a given criterion.

## Triggers

Trigger nodes start the execution of logic when a specific event occurs.

Example: **Trigger the increment of a score**

1. Add an **On Click** node connected to a button in your interface.
2. Connect it to a **Log** node.

When the user clicks the button, the **On Click** node triggers the execution of the logic, and the **Log** node displays a message in the console.

## Conditional Nodes (If)

Conditional nodes allow you to test a condition and execute different actions based on the result.
A conditional node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A condition input (<DSchemaType :schema="LogicType.boolean()" />)
- A true output (<DSchemaType :schema="LogicType.exec()" />)
- A false output (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgIz0hToAmApohQgIAFjC9RAZikBOALT9SAdmXzRsqQCZ5AIzABWAGbypR2bN68wWrfyPLCIXhCwQnAJ0H8syIxFR4fkowAFd4LFYAFSoAB0EnHCgAfXRdACt+MF9hKAgWfmQQNMzskFoKyiSsfg881ESoWNCsIVAk1IysnJAAIXKuDGw8AmESJAAOShokTkoMAHMcMCKBXVCFgHpF8spSCYOIA10DeQMtIyl1XXYweQswE2VZMX2jfl5deycXNydk+A4BiFMYcCjUZCiLheII5fyBfiDTCuEZOcbydjKabIeRaJFLFZIZz8dZbWKoCA0LgANn40k0sju5y0d1EykM8iOulIuK0vGUpAMymkEBeP1c7mEMJ8fgCQS41Vq9UazVajWSYHwvBwuHwyCwHlCiKRwz1oKQZ2xFrx83QBKKRgwAHdNjgjLsQB8hfx2Lx2KZeAZTqIrBBOVJ9mdRBAuQY5B9dOK-lLvHC5cFwOFIiwYvE2iAOiVuk48gUikWyhUFVAanUAiqWvnC10ykSAIIDW2m0bEZBTCEWqG2+1EtYbbZ2zsgJ04GFOUi2KS3QPyUi6alh0T7XjyCb8CD+owuOwTOyCn1OIweVhOADW-BmxRayX4RCyIEoPAERX2h2Op3OS5rlue5GSeF4twmd5Pm+LhIjvB8ig6V930-PgQRAWl6TkJlbFZdlTi5HlbH5QVhSkUV3EqTDeCMMBTwmBRRH0YMtzDUV2H9TEIF0LRSF9UVRGpS9rzYYR70fdBn3YeEgg-bh0KKLC5Bws48PUAjOWOYi+QFIURTFOD0AQx9kLfFY0O-IkxAkaQ5EUFQ1A0bQ9EMEwzAsKwbDsBwp1IKR+HOMB9Hkal2SuLc43uUh+AUMBaQMX1lH4ZQDF4UgRJvcTEKJKSsGSUgDSNeSvww5SGVwlkNI5IjeVI-SKMMyh4Oy0yUhQiyFKsz1A2S31-SkQNg1DcNIwMaNY3jT4BgqIA"/>

## Switch Node

The **Switch** node routes execution based on the value of an input, like a `switch` in JavaScript. For each declared case, a dedicated execution output is exposed; a `default` output catches unmatched values.

A Switch node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A value input (<DSchemaType :schema="LogicType.union([LogicType.string(), LogicType.number()])" />)
- One execution output per declared case (<DSchemaType :schema="LogicType.exec()" />)
- A `default` output (<DSchemaType :schema="LogicType.exec()" />)

## Loop Nodes (For, While)

Loop nodes allow you to repeat an action multiple times based on a condition or a list.

### For Loop

A For loop node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- An array input (<DSchemaType :schema="LogicType.array(LogicType.unknown())" />)
- An execution output (<DSchemaType :schema="LogicType.exec()" />)
- An element output (of the array element type)
- An index output (<DSchemaType :schema="LogicType.number()" />)
- An end output (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgIz0hToAmApohTgAzAA5SvCGICcAWn6kIEOQBZ27VXLEAzAGxaARv3Y6A7L15nSYGQFZCIKVgiOAToP5ZkOiKnj8lGAArvBYrAAqVAAOgo44UAD66IYAVvxg3sJQECz8yCAp6ZkgtGWUCVj8bjmo8VDRwVhCoAnJaRlZIAAi+PwAhKVcGNh4BMIkSGKUNEiclBgA5jhgBQKGwYsA9EullIaqqtIiJnJ6AEwnaucQvNqGdiJyEKZ67OcyYIZ6hmKOzq5hB4AllfP5AuBQuEWFFYi0QG0ip1HDk8gUkSUysNMBBcPhHJNptRkGpsctVkgnPwNttdlwdOJZHoIOc1Kpzjo1NZ2HJDGBzjzDIZxOxeDIROxSHYdP9cYDQIl4DgGPkJhwKMSkKouMCvD4-AFsaN8WqkHJ2ETZnJzmSVmtqZsttFUBAaFwxGBrDp+AI5GZ2NK1FYwLzrCoIDIZIYA2Y9KQdDJVaAAe5PKCDfwuJVqrV6o1mvVEmB0MEoFkROUQCNcWMCSS9DMSTaFuhyQUdBgAO5bHToNxDSidnDAxzM9hmVQiCVyUhid5qDRiXmPOxyMAiUjnMTbqeyJMgHRuViOADW-FmhSaiXYCQEJEoPAEBQ9Xp9-D9Ac5qmDoaUz0j0Z2LG8aJnsIDhKe54FIiHQlA+fCqiABxHGIJw8hcVzsrc9yPM8rzvJ83y-AOSGGLwehgAIPI6PGS6TiIZhyFGhikH6qjfByMjnD8Mh6I4h7HsIZ4XiWWCJKQGDoNEIDwU+lIvvGb4foG35mCGhhhv+UYxnGCb5FwEFCVBlJtPwRAZDJ3AIQUyHHKcGHvlhdxiA8TwvPoBFfD8fyVuYYDsCxE4KJ8IaHDIWgyLcdzsIoAWKCx5xmH8wgCWwRkiVeZkWbJiEMtuvEsmyHJcqQgr8oKwpzmKEpSjKBnoJBF6meZqw5c+nqKb6-oqT+Gl-hG2lAbpoGVtytzmCoYhxoYbJmJyMg6JYTGqGYdjxmYZgsjIvD8UeaWgMJ6JXucZk4N4bXyR13pdZ+QZqb+4YATpIH6ZQhkHcZCJJFlrVWXJogSFIsgKEoKjqJo2j6EYJjmJY1i2A4WK0EAA"/>

### While Loop

A While loop node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A condition input (<DSchemaType :schema="LogicType.boolean()" />)
- An execution output (<DSchemaType :schema="LogicType.exec()" />)
- An end output (<DSchemaType :schema="LogicType.exec()" />)

## Async operations

The execution flow natively handles **async** operations. When a node has to wait for a result that takes time (API call, DB query, etc.), the flow pauses until that result is ready; it then resumes with the value available on the node's output.

_For JavaScript developers: this is the equivalent of an `await` on a promise._