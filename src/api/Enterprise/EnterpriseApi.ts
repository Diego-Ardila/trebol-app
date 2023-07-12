import axios from "axios";
import { api } from "../../utils/MockServer";
import { EnterpriseType } from "../../utils/Types";

type CreateEnterpriseBody = {
  id: number | string,
  enterpriseName: string,
  email: string,
  client: string
}

type ParamsType = {
  enterpriseId: number | string,
  templateInputId: number | string
}

export async function saveFile(body: FormData, { enterpriseId, templateInputId }: ParamsType): Promise<EnterpriseType> {
  try {
    const response = await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER,
      url: `enterprise/file/${enterpriseId}/${templateInputId}`,
      data: body
    });
    return response.data
  } catch (error) {
    throw error;
  }
}

export async function deleteFile({ enterpriseId, templateInputId }: ParamsType): Promise<EnterpriseType> {
  try {
    const response = await axios({
      method: 'PUT',
      baseURL: process.env.REACT_APP_SERVER,
      url: `enterprise/delete/file/${enterpriseId}/${templateInputId}`,
    });
    return response.data
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