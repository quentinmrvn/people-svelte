<script>
    import Card from '../Card/Card.svelte'
    import CardAvatar from '../Card/CardAvatar.svelte'
    import CardInfo from '../Card/CardInfo.svelte'
    import CardTitle from '../Card/CardTitle.svelte'

    export let person;
</script>
<Card>
    <CardAvatar
    photoUrl={person.photo}
    altText={person.firstname}
    />
    <CardTitle
            mainTitle={`${person.firstname} ${person.lastname}`}
            subTitle={person.entity}
    />
    <CardInfo icon="email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
    </CardInfo>
    <CardInfo icon="phone">
        <a href={`tel:${person.phone}`}>{person.phone}</a>
    </CardInfo>
    {#if person.managerId}
        <CardInfo icon="supervisor_account" desc="manager">
            <a href={`/person/${person.managerId}`}>{person.manager}</a>
        </CardInfo>
    {/if}
</Card>
