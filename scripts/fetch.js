const url = 'https://api.brawlstars.com/v1/players/%23'; 
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU3ZDU3NTdiLTdlOTMtNDczNi05NmQxLWM2NjViM2IzMWQ2OCIsImlhdCI6MTcyNzIzMzU3Miwic3ViIjoiZGV2ZWxvcGVyLzBlYTU0NTA1LTlhMGQtMmRjMS01NDYyLTk3Yjc0YjA5ZTkxMSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuMjM3LjUuMjIyIl0sInR5cGUiOiJjbGllbnQifV19.kWAkVkaZIuoCCSM00b5HfvfiWAhvQxurNlU1ojRx4ifzpjP-a9LgjgYbqCkVQJavNQR0Pk4L-lvOQZezIzabsA';

const callApi = async (playerid) => {
    try {
        const resp = await fetch(url + playerid, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const data = await resp.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error('Erro ao buscar dados:', error);
        return error;
    }
};