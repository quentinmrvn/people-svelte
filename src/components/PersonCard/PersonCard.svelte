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
</Card>
