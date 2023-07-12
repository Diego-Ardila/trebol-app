import axios from "axios";
import { api } from "../../utils/MockServer";
import { EnterpriseType } from "../../utils/Types";

type CreateEnterpriseBody = {
  id: number | string,
  enterpriseName: string,
  email: string,
  client: string
}

export async function saveFile(body: FormData): Promise<EnterpriseType> {
  try {
    const response = await api.post('/api/enterprise', body);
    return response.data.enterprise;
  } catch (error) {
    throw error;
  }
}

export async function getEnterprise(enterpriseId: number | string): Promise<EnterpriseType> {
  try {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER,
      url: `enterprise/${enterpriseId}`,
    });
    return response.data
  } catch (error) {
    throw error;
  }
}

export async function createEnterprise(body: CreateEnterpriseBody): Promise<EnterpriseType> {
  try {
    const response = await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER,
      url: `enterprise`,
      data: body
    });
    return {
      enterpriseName: response.data.enterpriseName,
      id: response.data.id,
      email: response.data.email,
      templateInputs: response.data.templateInputs,
    };
  } catch (error) {
    throw error;
  }
}