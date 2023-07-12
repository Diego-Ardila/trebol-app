import axios from "axios";
import { ClientType } from "../../utils/Types";

export async function getClient(clientId: string): Promise<ClientType> {
  try {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER,
      url: `client/${clientId}`
    });    
    return response.data;
  } catch (error) {
    throw error;
  }
}