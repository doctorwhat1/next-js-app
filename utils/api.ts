export const fetchTeams = async () => {
    const response = await fetch('http://45.144.235.93:5000/teams');
    if (!response.ok) {
        throw new Error('Failed to fetch teams');
    }
    return response.json();
};

export async function fetchTeamByID(id: number) {
    const response = await fetch(`http://45.144.235.93:5000/teams/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch team');
    }
    return response.json();
}

