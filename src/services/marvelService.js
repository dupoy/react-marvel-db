export default class MarvelService {
    _apiBase = "https://gateway.marvel.com/v1/public"
    _apiPublicKey = "243e96fd5ea6d047d4aa599fcf5ec197"
    _apiHash = "6aa737ce4aef3664af39d54b0e32d81c"
    _apiFormat = "format=comic&formatType=comic&orderBy=issueNumber&"


    async getResources(url, apiFormat=this._apiFormat) {
        const res = await fetch(`https://gateway.marvel.com/v1/public/${url}?${apiFormat}ts=1&apikey=${this._apiPublicKey}&hash=${this._apiHash}`, {})

        if (!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json();
    }

    getAllComics = async () => {
        return await this.getResources('comics');
    }

    getComics = async (id) => {
        return await this.getResources(`comics/${id}`, '');
    }
}