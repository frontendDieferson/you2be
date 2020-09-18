const ytdl = require('ytdl-core')

exports.download = async (req, res) => {
    const {url} = req.body

    res.removeHeader('Content-Type');
    res.removeHeader('Content-Disposition') ;
    const title = await pegaDados(url)
                       
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader("Content-Disposition", "attachment; filename=" + title); 

    let mp3 = ytdl(url, {quality:'highestaudio'} );
    mp3.pipe(res);                       
                        
    async function pegaDados(url){
        try{
            const dados = await ytdl.getBasicInfo(url)
            const titulo = removeEspecialChar(dados.videoDetails.title)
            return titulo;
        }catch(e){
            res.send('Ouve um erro')
        }
    }
    function removeEspecialChar(especialChar){
        especialChar = especialChar.replace(/[,]/giu, '');
        especialChar = especialChar.replace(/[ ]/giu, '%20');
        especialChar = especialChar.replace(/[áàãâä]/giu, 'a');
        especialChar = especialChar.replace(/[éèêë]/giu, 'e');
        especialChar = especialChar.replace(/[íìîï]/giu, 'i');
        especialChar = especialChar.replace(/[óòõôö]/giu, 'o');
        especialChar = especialChar.replace(/[úùûü]/giu, 'u');
        especialChar = especialChar.replace(/[ç]/giu, 'c');
        //especialChar = especialChar.replace(/[^a-z0-9]/giu, '_');
        //especialChar = especialChar.replace(/_+/giu, '_');
        return especialChar;
}

    return;
}