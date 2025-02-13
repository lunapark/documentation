<template>
    <div class="requirements-table">
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Minimum</th>
                <th>Recommended</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>CPU</td>
                <td>2 x 1.8 GHz 64-bit (x64)</td>
                <td>4 x 2.4 GHz 64-bit (x64)</td>
            </tr>
            <tr>
                <td>RAM</td>
                <td>4 GB</td>
                <td>8 GB</td>
            </tr>
            <tr>
                <td>Disk Space</td>
                <td>3.5 GB for fresh installs, 5 GB for upgrades</td>
                <td>N/A</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.requirements-table {
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
