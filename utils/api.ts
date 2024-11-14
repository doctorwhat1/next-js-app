import { Team } from "@/models/Team";


// make it a secret variable later on
const API_HOST = 'http://45.144.235.93:5000';

export const fetchTeams = async () => {
    const response = await fetch(`${API_HOST}/teams`);
    if (!response.ok) {
        throw new Error('Failed to fetch teams');
    }
    return response.json();
};

export async function fetchTeamByID(id: number) {
    const response = await fetch(`${API_HOST}/teams/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch team');
    }
    return response.json();
}

export async function createTeam(teamData: Team) {
    const response = await fetch(`${API_HOST}/teams`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
    });

    if (!response.ok) {
        throw new Error('Failed to create team');
    }

    return response.json();
}
