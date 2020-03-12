<script>
    export let name;
    export let type;
    export let value;
    export let disabled = false;
    export let isInvalid = false;
    export let label;
    export let placeholder;

    const idForName = name => `person-form-${name}`;
</script>

<div class="SearchInput input-field">
    <i class="material-icons prefix"></i>
    <input
            id={idForName}
            name={name}
            type='text'
            value={value}
            disabled={disabled}
            class={isInvalid ? 'invalid' : undefined}
            on:input
            autoComplete="off"
    />
    <label for={idForName(name)} class={value ? 'active' : undefined}>
        {label}
    </label>
</div>
