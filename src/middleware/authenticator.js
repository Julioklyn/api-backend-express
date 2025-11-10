export const authenticator = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        return res.status(401).json({ message: 'Não autorizado!' })
    }
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Não autorizado!' })
    }

    try {
    const payload = jwd.verify(token, process.env.JWT_SECRET)
    req.userLogged = payload;
    } catch (err) {
        return res.status(401).json({ message: 'Não autorizado!' })
    }
    next();
}