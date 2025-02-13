<template>
    <div class="browser-compatibility-table">
        <table>
            <thead>
            <tr>
                <th>Navigators</th>
                <th>Minimum version</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Chrome</td>
                <td>v120</td>
            </tr>
            <tr>
                <td>Edge</td>
                <td>v120</td>
            </tr>
            <tr>
                <td>Safari</td>
                <td>v17.2</td>
            </tr>
            <tr>
                <td>Firefox</td>
                <td>v117</td>
            </tr>
            <tr>
                <td>Opera</td>
                <td>v106</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.browser-compatibility-table {
    margin: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid var(--color-background-3);
    text-align: left;
}

thead {
    background-color: #333;
    color: white;
}

tbody td {
    background-color: #1c1c2e;
    color: white;
}
</style>
