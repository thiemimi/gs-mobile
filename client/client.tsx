import axios, { AxiosResponse } from "axios";
import { Reward } from "@/models/Recompensas.interface";


const baseURL = 'https://67400cb6d0b59228b7ee7d72.mockapi.io/reward';

const client = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const responseBody = (response: AxiosResponse) => response.data;


const requests = {
    get: (path: string) => client.get(path).then(responseBody)
};


export const RewardClient = {
    getRewards: (): Promise<Reward[]> => requests.get('/') 
};
