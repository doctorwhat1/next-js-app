export const fetchTeams = async () => {
    const response = await fetch('http://localhost:8000/team-service/teams');
    if (!response.ok) {
        throw new Error('Failed to fetch teams');
    }
    return response.json();
};

export async function fetchTeamByID(id: number) {
    const response = await fetch(`http://localhost:8000/team-service/teams/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch team');
    }
    return response.json();
}

