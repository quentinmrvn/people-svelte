const apiUrl = 'http://localhost:3001/people'

export async function fetchPeople() {
    const response = await fetch(apiUrl);
    return await response.json();
}

export async function updatePerson(id, patch) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(patch),
        headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
}
