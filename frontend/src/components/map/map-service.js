import api from "../../services/api";

export default function mapService(){

     const fetch = require('node-fetch');
     const token="c9d23b109021e3a78170b8d02e5014a21bb7a571";
     const datasetSlug="covid19";
     const tableName="caso_full";
     const filters = {state: "SC", is_last: "True"};
     const url=`https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`;
     const data = {};

    let getData = async () => await fetch(url,{
            method: 'get',
            headers: {Authorization: `Token ${token}`}})
            .then(res => res.json()).then(json => {
            data.biguacu = json.results[38];
            data.floripa = json.results[90];
            data.palhoca = json.results[184];
            data.saoJose = json.results[251];
            postInfos(data.biguacu);
            postInfos(data.palhoca);
            postInfos(data.saoJose);
            postInfos(data.floripa);

            return data;
        });
    return getData()

    async function postInfos(data){
        try{
            api.post('', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }catch(erro){
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }
}
