import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { StyledLink } from "../../../css/style";
import services from "../../../services/services";
import { InputStyle, LinkStyle, ButtonStyle, AuthToggle, FormStyle } from "../style";

export default function Login() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  async function singIn(data) {
    try {
      const promise = await services.login(data)

      console.log(promise)

      toast.success('Logado com sucesso!')

      navigate('/home')
    } catch {
      toast.error('Erro ao tentar logar sua conta')
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit((data) => singIn(data))}>
      <InputStyle {...register("nickname")} type="text" placeholder="Apelido" />
      <InputStyle {...register("password")} type="password" placeholder="Senha" />
      <ButtonStyle type="submit">Entrar</ButtonStyle>
      <AuthToggle>
        Não tem uma conta?
        <StyledLink to="/register">
          <LinkStyle>Cadastre-se</LinkStyle>
        </StyledLink>
      </AuthToggle>
    </FormStyle>
  )
}