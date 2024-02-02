export default function handlerCustomers (req, res) {
    res.status(200).json({msj: `Customer ${req.query.slug}`})
}