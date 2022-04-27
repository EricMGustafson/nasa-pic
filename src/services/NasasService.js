import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService"

const params = {
  api_key: 'aU1VVYd8dkOsuSfDCh5LDzpGt11Tl3zw4cfCkT8U'
}
class NasaService {

  async search() {
    const res = await api.get('', { params })
    AppState.picture = res
  }

}

export const nasaService = new NasaService()