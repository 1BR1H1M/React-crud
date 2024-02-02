export default function handlerCustomers (req, res) {
    res.status(200).json({msj: `Provider ${req.query.params[1]}`})
}