import { create } from '../../models/profileModel.js'
import bcrypt from 'bcrypt'

export const createProfileController = async (req, res, next) => {
  try {
    const profile = req.body

    const validation = validateProfile(profile, { id: true })

    if (!validation.success) {
      return res.status(400).json({
        message: 'Dados inválidos',
        errors: validation.errors
      })
    }
    validation.data.pass = await bcrypt.hash(validation.data.pass, 10)

    const result = await create(validation.data)
    res.json({
      message: 'Usuário criado com sucesso!',
      profile: result
    })
  } catch (error) {
    if (error.code === 'P2002' && error.meta.target.includes('email')) {
      return res.status(400).json({
      message: 'Dados inválidos',
      errors: {
          email: ['Email já cadastrado.']
      }
    })
  }
  
    next(error)
  }
}

