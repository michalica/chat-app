import {TOKEN} from "../../config/api/endpoints";
import HttpErrorException from "../../Exeptions/HttpErrorException";

export async function fetchFrom<T = unknown>(url: string):  Promise<T>
{

    try {


        const response = await fetch(url);

        return await response.json();
    }catch (e) {
        // Here we should throw appropriate Exception (400, 404, 500 etc.)
        // for now I am just throwing HttpErrorException
        throw new HttpErrorException('get error');
    }
}

export async function postTo<T = unknown>(url: string, data: any):  Promise<T>
{
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': `${TOKEN}`
            },
            body: JSON.stringify(data),
        });

        return await response.json();
    }catch (e) {
        // Here we should throw appropriate Exception (400, 404, 500 etc.)
        // for now I am just throwing HttpErrorException
        throw new HttpErrorException('get error');
    }

}
