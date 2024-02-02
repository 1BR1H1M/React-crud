export default function handlerpost (req, res){
    res.json ({msj: `Params ${req.query.id}`})
}