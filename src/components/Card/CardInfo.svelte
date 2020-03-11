<script>
    export let desc = "";
    export let icon = "";
</script>

<div class="card-info">
    <i class="material-icons" title={desc || icon}>
        {icon}
    </i>
    <span>
        <slot/>
    </span>
</div>
