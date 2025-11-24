export const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    //console.error(error.stack)

        if(error.message.includes('in Json at position') || error.message.includes('not valid JSON')) {
            return res.status(500).json({
                message: 'Error no JSON enviado na requisição',
                })  
            }

    res.status(500).json({ 
        message: 'Opss.. Ocorreu um erro no servidor! Tente novamente mais tarde',
     })
}