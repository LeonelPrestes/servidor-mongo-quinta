function verificarAdmin(req, res, next) {
    const admin = req.user.usuario.tipo;

    if (admin !== "admin") {
        return res.status(403).json({
            erro: "Acesso negado. Apenas administradores podem acessar esta rota."
        });
    }

    next();
}

module.exports = verificarAdmin;