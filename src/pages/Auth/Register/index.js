import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { StyledLink } from "../../../css/style";
import services from "../../../services/services";
import { InputStyle, LinkStyle, ButtonRegisterStyle, AuthToggle, FormStyle } from "../style";

export default function Register() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  async function singUp(data) {
    try {
      await services.register(data)

      toast.success('Parabens sua conta foi criada com sucesso!')

      navigate('/')
    } catch {
      toast.error('Erro ao cadastrar sua conta')
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit(data => singUp(data))}>
      <InputStyle {...register("nickname")} type="text" placeholder="Apelido" />
      <InputStyle {...register("email")} type="email" placeholder="Email" />
      <InputStyle {...register("password")} type="password" placeholder="Senha" />
      <ButtonRegisterStyle type="submit">Cadastrar</ButtonRegisterStyle>
      <AuthToggle>
        Já possui uma conta?
        <StyledLink to="/">
          <LinkStyle>Entre</LinkStyle>
        </StyledLink>
      </AuthToggle>
    </FormStyle>
  )
}