export async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        console.log("Erro");
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }
    const data = (await response.json());
    return data;
}
