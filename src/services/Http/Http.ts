import {TOKEN} from "../../config/api/endpoints";

export async function fetchFrom<T = unknown>(url: string):  Promise<T>
{

    const response = await fetch(url);

    const body = await response.json();

    return body;
}

export async function postTo<T = unknown>(url: string, data: any):  Promise<T>
{

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': `${TOKEN}`
        },
        body: data,
    });

    const body = await response.json();

    return body;
}
