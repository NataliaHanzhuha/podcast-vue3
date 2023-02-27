<template>
    <i class="sidebar-icon group">
        <slot></slot>
        <span class="sidebar-tooltip group-hover:scale-100">{{tooltip}}</span>
    </i>
</template>
<script>
export default {
    name: 'MenuButton',
    props: {
        tooltip: {
            type: String,
            required: 'true'
        }
    }
}
</script>