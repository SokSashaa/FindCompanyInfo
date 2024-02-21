import axios from "axios";


const token = '152956bd52d4ea856aa077e7fd05655b6b41a316'

export type getCompany = {
    name: string,
    kpp?: string,
    inn: string,
    ogrn: string,
    management?: {
        name: string,
        post: string,
    },
    address: string
}
const fetchData = async (query: string) => {
    return await axios.get('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
        {
            params: {
                query: query,
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            }
        }
    ).then((res) => {
        const companies = res.data.suggestions.map((item: any): getCompany => {
            return {
                name: item.value,
                kpp: item.data.kpp,
                ogrn: item.data.ogrn,
                inn: item.data.inn,
                management: item.data.management,
                address: item.data.address.value
            }
        })
        return companies
    })
}

export default fetchData