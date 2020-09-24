const ytdl = require('ytdl-core')

exports.info = async (req, res) => {
    const {url} = req.body


    const data = await pegaDados(url)
                       
    res.json(data)                  
                        
    async function pegaDados(url){
        try{
            
            const dados = await ytdl.getBasicInfo(url)
            
            console.log(dados.videoDetails)
            return dados.videoDetails;
        }catch(e){
            console.log(e)
           return "Erro"
        }
 
}

    return;
}