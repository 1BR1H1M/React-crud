export default function users (req, res ){
    //res .json({msj: `Method ${req.method}`}

    switch (req.method) {
        case "GET":
            res.json({ msj: `Method ${req.method}`});
            break;
        case "POST":
            res.json({ msj: `Method ${req.method}`});
            break;
        case "PUT":
            res.json({ msj: `Method ${req.method}`});
            break;
    
    }
}