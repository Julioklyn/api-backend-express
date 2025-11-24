import { list } from "../../models/profileModel.js"

export const listProfileController = async (req, res) => {
try {
  const result = await list()

  res.json({message: 'Usuários consultados com sucesso!',
    profile:result
  })
} catch (error) {
  next(error)
 }
}
