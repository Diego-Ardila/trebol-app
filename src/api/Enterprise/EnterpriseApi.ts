import { api } from "../../utils/MockServer";
import { EnterpriseType } from "../../utils/Types";

export async function saveFile(body: FormData): Promise<EnterpriseType> {
  try {
    const response = await api.post('/api/enterprise', body);
    return response.data.enterprise;
  } catch (error) {
    throw error;
  }
}